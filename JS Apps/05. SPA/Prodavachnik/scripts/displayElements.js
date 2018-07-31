function showHomeView() {
    showView('viewHome')
}

function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset');
}

function showRegisterView() {
    $('#formRegister').trigger('reset');
    showView('viewRegister')
}

function showListAdverts() {
    showView('viewAds');
    listAds()
}

function showCreateAdvert() {
    $('#formCreateAd').trigger('reset');
    $('#formCreateAd input[name=datePublished]').val(getDate()).prop('disabled',true);

    showView('viewCreateAd')

}

function showView(viewName) {
    $('main > section').hide(); // Hide all views
    $('#' + viewName).show() // Show the selected view only
}

function showHideMenuLinks() {
    $('#linkHome').show();

    if (localStorage.getItem('authToken')===null){
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkListAds').hide();
        $('#linkCreateAd').hide();
        $('#linkLogout').hide();
    }else{
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkListAds').show();
        $('#linkCreateAd').show();
        $('#linkLogout').show();
        $('#loggedInUser').text("Welcome, " + localStorage.getItem('username') + "!")
    }
}

function showInfo(message) {
    let infoBox = $('#infoBox');
    infoBox.text(message);
    infoBox.show();
    setTimeout(function() {
        $('#infoBox').fadeOut()
    }, 3000)
}

function showError(errorMsg) {
    let errorBox = $('#errorBox');
    errorBox.text("Error: " + errorMsg);
    errorBox.show()
}

function getDate() {
    return new Date().toISOString().slice(0, 10);
}