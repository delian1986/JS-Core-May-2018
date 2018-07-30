const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppKey = 'kid_rypwq9uNm';
const APP_SECRET = 'cf6e7fc802924a6a8650cf06ed039b44';
const kinveyAppAuthHeaders = {'Authorization': "Basic " + btoa(kinveyAppKey + ":" + APP_SECRET)};
const BOOKS_PER_PAGE = 10;

function loginUser() {

    let userData = {
        username: $("#formLogin input[name='username']").val(),
        password: $("#formLogin input[name='passwd']").val()
    };

    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + 'user/' + kinveyAppKey + '/login',
        headers: kinveyAppAuthHeaders,
        data: userData,
        success: loginSuccess,
        error: handleAjaxError
    });

    function loginSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listBooks();
        showInfo('Login successful.');
    }
}

function registerUser() {

    let userData = {
        username: $("#formRegister input[name='username']").val(),
        password: $("#formRegister input[name='passwd']").val()
    };

    $.ajax({
        method: 'POST',
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
        headers: kinveyAppAuthHeaders,
        data: userData,
        success: registerSuccess,
        error: handleAjaxError
    });

    function registerSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listBooks();
        showInfo('User registration successful')
    }
}

function listBooks() {
    showView('viewBooks');
    $('#books').empty();

    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books",
        headers: getKinveyUserAuthHearders(),
        success: loadBooksSuccess,
        error: handleAjaxError
    });

    function loadBooksSuccess(books) {
        showInfo('Books loaded.');
        if (books.length === 0) {
            $('#books').text('No books in the library.');
        } else {
            let bookTable = $('<table>')
                .append($('<tr>')
                    .append($('<th>Title</th><th>Author</th><th>Description</th><th>Action</th>')));

            for (let book of books) {
                appendBookRow(book, bookTable);
                $('#books').append(bookTable)
            }

            function appendBookRow(book, bookTable) {
                let links = [];
                if (book._acl.creator === localStorage['userId']) {
                    let delLink = $('<a href="#">[Delete]</a>')
                        .on('click', deleteBook.bind(this, book));

                    let editLink = $('<a href="#">[Edit]</a>')
                        .on('click', loadBookForEdit.bind(this, book));

                    links = [delLink, ' ', editLink]
                }
                bookTable.append($('<tr>')
                    .append($('<td>').text(book.title))
                    .append($('<td>').text(book.author))
                    .append($('<td>').text(book.description))
                    .append($('<td>').append(links)));
            }
        }
    }
}

function getKinveyUserAuthHearders() {
    return {
        'Authorization': `Kinvey ${localStorage.getItem('authToken')}`
    }
}


function createBook() {

    let bookData = {
        title: $("#formCreateBook input[name='title']").val(),
        author: $("#formCreateBook input[name='author']").val(),
        description: $("#formCreateBook textarea").val()
    };

    $.ajax({
        method: 'POST',
        url: kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/books',
        headers: getKinveyUserAuthHearders(),
        data: bookData,
        success: createBookSuccess,
        error: handleAjaxError
    });

    function createBookSuccess(book) {
        listBooks();
        showInfo(`${book.title} created`)
    }
}

function deleteBook(book) {
    $.ajax({
        method: "DELETE",
        url: kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/books/" + book._id,
        headers: getKinveyUserAuthHearders(),
        success: deleteBookSuccess,
        error: handleAjaxError
    });

    function deleteBookSuccess(respond) {
        listBooks();
        showInfo(`${book.title} deleted.`);
    }
}

function loadBookForEdit(book) {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/books/" + book._id,
        headers: getKinveyUserAuthHearders(),
        success: loadBookForEditSuccess,
        error: handleAjaxError
    });

    function loadBookForEditSuccess(book) {
        $('#formEditBook input[name=id]').val(book._id);
        $('#formEditBook input[name=title]').val(book.title);
        $('#formEditBook input[name=author]')
            .val(book.author);
        $('#formEditBook textarea[name=description]')
            .val(book.description);
        showView('viewEditBook');
    }
}

function editBook() {

    let bookData = {
        title: $('#formEditBook input[name=title]').val(),
        author: $('#formEditBook input[name=author]').val(),
        description:
            $('#formEditBook textarea[name=description]').val()
    };
    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/books/" + $('#formEditBook input[name=id]').val(),
        headers: getKinveyUserAuthHearders(),
        data: bookData,
        success: editBookSuccess,
        error: handleAjaxError
    });

    function editBookSuccess(response) {
        listBooks();
        showInfo(`${response.title} edited.`);
    }

}

function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    localStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    localStorage.setItem('userId', userId);
    let username = userInfo.username;
    localStorage.setItem('username', username);
    $('#loggedInUser').text("Welcome, " + username + "!");
}

function logoutUser() {
    let userAuth = localStorage.getItem('authToken');
    const logoutHeader = {"Authorization": `Kinvey ${userAuth}`};
    $.ajax({
        method: 'POST',
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/_logout",
        headers: logoutHeader,
        error: handleAjaxError
    });

    localStorage.clear();
    $('#loggedInUser').text('');
    showHideMenuLinks();
    showView('viewHome');
    showInfo('Logout successful.')
}


function displayPaginationAndBooks(books) {
    showView('viewBooks');
    let pagination = $('#pagination-demo');
    if(pagination.data("twbs-pagination")){
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            $('#books > table tr').each((index, element) => {
                if (index > 0) {
                    $(element).remove()
                }
            });
            let startBook = (page - 1) * BOOKS_PER_PAGE;
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length);
            $(`a:contains(${page})`).addClass('active');
            for (let i = startBook; i < endBook; i++) {
                let tr = $(`<tr><td>${books[i].title}</td>`+
                    `<td>${books[i].author}</td>`+
                    `<td>${books[i].description}</td>`);
                $('#books > table').append(tr);
                if (books[i]._acl.creator === localStorage.getItem("userId")) {
                    let td = $('<td>');
                    let aDel = $('<a href="#">[Delete]</a>').on('click', function () {
                        deleteBook(books[i])
                    });
                    let aEdit = $('<a href="#">[Edit]</a>').on('click', function () {
                        loadBookForEdit(books[i])
                    });
                    td.append(aDel).append(aEdit);
                    tr.append(td)
                }
            }
        }
    })
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}