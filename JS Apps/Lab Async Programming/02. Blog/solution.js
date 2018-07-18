function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_B1w4HlTX7'
    const user = 'peter';
    const pass = 'p';

    const encode = btoa(user + ':' + pass);
    const auth = {'Authorization': 'Basic ' + encode};

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPosts);

    function loadPosts() {
        $.ajax({
            method: 'GET',
            url: baseUrl + '/posts',
            headers: auth
        }).then(fillOptions).catch(displayError);
    }

    function fillOptions(posts) {
        console.log(posts);

        for (let post of posts) {
            let id_value = post._id;
            let title = post.title;

            $('#posts').append(`<option value="${id_value}">${title}</option>`);
        }
    }

    function viewPosts() {
        let selectedPost = $('#posts').val();
        let postReq = $.ajax({
            method: 'GET',
            url: baseUrl + '/posts' + '/' + selectedPost,
            headers: auth
        });

        let commentsReq = $.ajax({
            method: 'GET',
            url: baseUrl + `/comments/?query={"post_id":"${selectedPost}"}`,
            headers: auth
        });

        Promise.all([postReq,commentsReq]).then(displayPostWithComments).catch(displayError)
    }
    
    function displayPostWithComments([post,comments]) {
        $('#post-title').text(post.title);
        $('#post-body').text(post.body);

        $('#post-comments').empty();
        for (let comment of comments) {
            $('#post-comments').append($(`<li>${comment.text}</li>`))
        }
    }

    function displayError(err) {
        let errorDiv = $("<div>").text("Error: " +
            err.status + ' (' + err.statusText + ')');
        $(document.body).prepend(errorDiv);
        setTimeout(function() {
            $(errorDiv).fadeOut(function() {
                $(errorDiv).remove();
            });
        }, 3000);
    }
}