function attachAllEvents() {
    //Navigation menu
    $('#linkHome').on('click',showHomeView);
    $('#linkLogin').on('click',showLoginView);
    $('#linkRegister').on('click',showRegisterView);
    $('#linkListAds').on('click',showListAdverts);
    $('#linkCreateAd').on('click',showCreateAdvert);
    $('#linkLogout').on('click',logoutUser);

    $('#buttonLoginUser').on('click',loginUser);
    $('#buttonRegisterUser').on('click',registerUser);
    $('#buttonCreateAd').on('click',createAd);
    $('#buttonEditAd').on('click',editAd);
    //prevent reload on form submit
    $("form").on('submit', function(event) { event.preventDefault() });

    // Bind the info / error boxes
    $("#infoBox, #errorBox").on('click', function() {
        $(this).fadeOut()
    })

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function () {
            $("input").prop('disabled', true);
            $('#loadingBox').show()
        },
        ajaxStop: function () {
            $('#loadingBox').hide();
            $("input").prop('disabled', false);
        }
    });
}