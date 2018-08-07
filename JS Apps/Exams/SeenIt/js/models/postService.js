let posts=(()=>{
    function getAllPosts() {
        const endpoint='posts?query={}&sort={"_kmd.ect": -1}';

        return requester.get('appdata',endpoint,'kinvey')
    }

    function createPost(author,title,description,url,imageUrl) {
        let data={author,title,description,url,imageUrl};

        return requester.post('appdata','posts','kinvey',data)
    }
    
    function editPost(postId,author,title,description,url,imageUrl) {
        let endpoint=`posts/${postId}`;
        let data={author,title,description,url,imageUrl};

        return requester.update('appdata',endpoint,'kinvey',data);
    }
    
    function deletePost(postId) {
        let endpoint=`posts/${postId}`;
        return requester.remove('appdata',endpoint,'kinvey');
    }

    function viewMyPosts(author) {
        let endpoint=`posts?query={"author":"${author}"}&sort={"_kmd.ect": -1}`;
        return requester.get('appdata',endpoint,'kinvey')
    }

    function postDetails(postId) {
        let endpoint=`posts/${postId}`;
        return requester.get('appdata',endpoint,'kinvey')
    }



    return{
        getAllPosts,
        createPost,
        editPost,
        deletePost,
        viewMyPosts,
        postDetails
    }
})();