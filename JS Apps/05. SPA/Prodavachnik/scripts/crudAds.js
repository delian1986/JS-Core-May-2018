const kinveyBaseUrl='https://baas.kinvey.com/';
const kinveyAppKey = 'kid_BylKNr2Nm';
const APP_SECRET = '0f15bd1138af43c0874a2c222da5d692';
const kinveyAppAuthHeaders = {'Authorization': "Basic " + btoa(kinveyAppKey + ":" + APP_SECRET)};


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
        listAds();
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
        listAds();
        showInfo('User registration successful')
    }
}

function createAd() {
    // $('#formCreateAd input[name=datePublished]').val(getDate());
    let adData = {
        title: $("#formCreateAd input[name='title']").val(),
        description: $("#formCreateAd textarea[name='description']").val(),
        publisher: getPublisher(),
        date: $('#formCreateAd input[name=datePublished]').val(),
        price: Number($("#formCreateAd input[name='price']").val()).toFixed(2)
    };

    $.ajax({
        method: 'POST',
        url: kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/adverts',
        headers: getKinveyUserAuthHeaders(),
        data: adData,
        success: createAdSuccess,
        error: handleAjaxError
    });

    function createAdSuccess(ad) {
        listAds();
        showInfo(`${ad.title} created`)
    }
}

function editAd() {
    let adData = {
        title: $('#formEditAd input[name=title]').val(),
        description: $('#formEditAd textarea[name=description]').val(),
        publisher: $('#formEditAd input[name=publisher]').val(),
        date: $('#formEditAd input[name=datePublished]').val(),
        price: Number(Number($('#formEditAd input[name=price]').val()).toFixed(2)),
        // image: $('#formEditAd input[name=image]').val()
    };

    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + $('#formEditAd input[name=id]').val(),
        headers: getKinveyUserAuthHeaders(),
        data: adData,
        success: editAdSuccess,
        error: handleAjaxError
    });

    function editAdSuccess(response) {
        listAds();
        showInfo('Ad edited.');
    }


}
function loadAdForEdit(ad) {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + ad._id,
        headers: getKinveyUserAuthHeaders(),
        success: loadAdForEditSuccess,
        error: handleAjaxError
    });

    function loadAdForEditSuccess(ad) {
        $('#formEditAd input[name=id]').val(ad._id);
        $('#formEditAd input[name=publisher]').val(ad.publisher);
        $('#formEditAd input[name=title]').val(ad.title);
        $('#formEditAd textarea[name=description]').val(ad.description);
        $('#formEditAd input[name=datePublished]').val(ad.date);
        $('#formEditAd input[name=price]').val(ad.price);
        // $('#formEditAd input[name=image]').val(ad.image);

        showView('viewEditAd');
    }
}

function deleteAd(ad) {
    $.ajax({
        method: "DELETE",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + ad._id,
        headers: getKinveyUserAuthHeaders(),
        success: deleteAdSuccess,
        error: handleAjaxError
    });

    function deleteAdSuccess(response) {
        listAds();
        showInfo('Ad deleted.');
    }
}

function loadAdDetails(ad) {
    $('#viewAdDetails').html($('<div>').append(
        // $('<img>').attr('src', ad.image),
        $('<br>'),
        $('<label>').text('Title:'),
        $('<h1>').text(ad.title),
        $('<label>').text('Description:'),
        $('<p>').text(ad.description),
        $('<label>').text('Publisher:'),
        $('<div>').text(ad.publisher),
        $('<label>').text('Date:'),
        $('<div>').text(ad.date)
    ));

    showView('viewAdDetails');
}

function listAds() {
    showView('viewAds');
    $('#ads').empty();

    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts",
        headers: getKinveyUserAuthHeaders(),
        success: loadAdsSuccess,
        error: handleAjaxError
    });

    function loadAdsSuccess(ads) {
        showInfo('Advertisements loaded.');
        if (ads.length === 0) {
            $('#ads').text('No advertisements available.');
        } else {
            let adsTable = $('<table>')
                .append($('<tr>')
                    .append($('<th>Title</th><th>Description</th><th>Publisher</th><th>Date Published</th><th>Price</th><th>Action</th>')));

            for (let ad of ads) {
                appendAdRow(ad, adsTable);
                $('#ads').append(adsTable)
            }

            function appendAdRow(ad, adsTable) {
                let links = [];
                let detailsLink = $('<a href="#">[Details]</a>')
                    .on('click', loadAdDetails.bind(this, ad));

                links.push(detailsLink,' ');
                if (ad._acl.creator === localStorage['userId']) {
                    let delLink = $('<a href="#">[Delete]</a>')
                        .on('click', deleteAd.bind(this, ad));

                    let editLink = $('<a href="#">[Edit]</a>')
                        .on('click', loadAdForEdit.bind(this, ad));


                    links.push(delLink, ' ', editLink)
                }
                adsTable.append($('<tr>')
                    .append($('<td>').text(ad.title))
                    .append($('<td>').text(ad.description))
                    .append($('<td>').text(ad.publisher))
                    .append($('<td>').text(ad.date))
                    .append($('<td>').text(ad.price))
                    .append($('<td>').append(links)));
            }
        }
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


function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}

function getKinveyUserAuthHeaders() {
    return {
        'Authorization': `Kinvey ${localStorage.getItem('authToken')}`
    }
}

function getPublisher() {
    return localStorage.getItem('username');
}

function getDate() {
    let date=new Date();
    let day=date.getDay();
    let month=date.getMonth();
    let year=date.getFullYear();

    return `${year}-${month}-${day}`;
}
