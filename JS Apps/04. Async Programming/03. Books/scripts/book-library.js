function startApp() {
    sessionStorage.clear(); //clears user auth data
    showHideMenuLinks();
    showView('viewHome');

    //Bind navigarion menu links
    $('#linkHome').on('click', showHomeView);
    $('#linkLogin').on('click', showLoginView);
    $('#linkRegister').on('click', showRegisterView);
    $('#linkListBooks').on('click', listBooks);
    $('#linkCreateBook').on('click', showCreateBookView);
    $('#linkLogout').on('click', logoutUser);

    //Bind the form submit action
    $("form").submit(function(e) { e.preventDefault() });

    $('#formLogin').on('submit', loginUser);

    //bind form submit buttons
    $('#buttonLoginUser').on('click',loginUser);
    $('#buttonRegisterUser').on('click',registerUser);
    $('#buttonCreateBook').on('click',createBook);
    $('#buttonEditBook').on('click',editBook);

    //bind info boxes
    $('#infoBox,#errorBox').on('click',function () {
        $(this).fadeOut();
    });

    //Attach AJAX 'loading' event listener
    $(document).on({
        ajaxStart:function () {$('#loadingBox').show()},
        ajaxStop:function () {$('#loadingBox').hide()}
    });

    //navigation system
    function showHideMenuLinks() {
        $('#linkHome').show();

        if (sessionStorage.getItem('authToken')){
            //We have logged user
            $('#linkLogin').hide();
            $('#linkRegister').hide();
            $('#linkListBooks').show();
            $('#linkCreateBook').show();
            $('#linkLogout').show();
        }else{
            //Not logged in
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkListBooks').hide();
            $('#linkCreateBook').hide();
            $('#linkLogout').hide();
        }
    }

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#'+viewName).show();
    }

    function showHomeView() {
        showView('viewHome')
    }
    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }
    function showRegisterView() {
        showView('viewRegister');
        $('#formRegister').trigger('reset');
    }
    function listBooks() {
        showView('viewBooks')
    }
    function showCreateBookView() {
        $('#formCreateBook').trigger('reset');
        showView('viewCreateBook')
    }

    function loginUser() {

    }

    function logoutUser() {
        //TODO..
    }

    function registerUser() {
        console.log('register');
    }
}