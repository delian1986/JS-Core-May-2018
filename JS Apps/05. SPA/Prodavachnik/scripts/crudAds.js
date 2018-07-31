const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppKey = 'kid_BylKNr2Nm';
const APP_SECRET = '0f15bd1138af43c0874a2c222da5d692';
const kinveyAppAuthHeaders = {'Authorization': "Basic " + btoa(kinveyAppKey + ":" + APP_SECRET)};

function getKinveyUserAuthHeaders() {
    return {
        'Authorization': `Kinvey ${localStorage.getItem('authToken')}`
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

function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    localStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    localStorage.setItem('userId', userId);
    let username = userInfo.username;
    localStorage.setItem('username', username);
    $('#loggedInUser').text("Welcome, " + username + "!");
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

function getPublisher() {
    return localStorage.getItem('username');
}

function listAds() {
    showView('viewAds');
    $('#ads').empty();

    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adv",
        headers: getKinveyUserAuthHeaders(),
        success: loadAdsSuccess,
        error: handleAjaxError
    });

    function loadAdsSuccess(ads) {
        showInfo('Advertisements loaded.');
        if (ads.length === 0) {
            $('#ads').text('No advertisements available.');
        } else {
            ads=ads.sort((a,b)=>Number(b.views)-Number(a.views));
            let adsTable = $('<table>')
                .append($('<tr>')
                    .append($('<th>Image</th><th>Title</th><th>Description</th><th>Publisher</th><th>Date Published</th><th>Price</th><<th>Views</th><th>Action</th>')));

            for (let ad of ads) {
                appendAdRow(ad, adsTable);
                $('#ads').append(adsTable)
            }

            function appendAdRow(ad, adsTable) {
                let links = [];
                let detailsLink = $('<a href="#">[Details]</a>')
                    .on('click', incrementViewCounter.bind(this, ad));

                links.push(detailsLink, ' ');
                if (ad._acl.creator === localStorage['userId']) {
                    let delLink = $('<a href="#">[Delete]</a>')
                        .on('click', deleteAd.bind(this, ad));

                    let editLink = $('<a href="#">[Edit]</a>')
                        .on('click', loadAdForEdit.bind(this, ad));


                    links.push(delLink, ' ', editLink)
                }
                adsTable.append($('<tr>')
                    .append($(`<td><img class="adTableImg" src=${ad.imageUrl}></td>`))
                    .append($('<td>').text(ad.title))
                    .append($('<td>').text(ad.description))
                    .append($('<td>').text(ad.publisher))
                    .append($('<td>').text(ad.date))
                    .append($('<td>').text(ad.price))
                    .append($('<td>').text(ad.views))
                    .append($('<td>').append(links)));
            }
        }
    }
}

function createAd() {
    let adData = {
        title: $("#formCreateAd input[name='title']").val(),
        description: $("#formCreateAd textarea[name='description']").val(),
        publisher: getPublisher(),
        date: $('#formCreateAd input[name=datePublished]').val(),
        price: Number($("#formCreateAd input[name='price']").val()).toFixed(2),
        imageUrl:$("#formCreateAd input[name='imgLink']").val(),
        views:0
    };

    if (adData.title !== '' && adData.description !== '' && adData.price !== ''&&adData.price>0) {
        $.ajax({
            method: 'POST',
            url: kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/adv',
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: createAdSuccess,
            error: handleAjaxError
        });
    } else {
        showError('All fields must be filled and price cannot be negative!')
    }


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
        imageUrl: $('#formEditAd input[name=imgLink]').val(),
        views:$('#formEditAd input[name=views]').val()
    };
    if (adData.title !== '' && adData.description !== '' && adData.price !== ''&&adData.price>0) {

        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adv/" + $('#formEditAd input[name=id]').val(),
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: editAdSuccess,
            error: handleAjaxError
        });
    }
    function editAdSuccess(response) {
        listAds();
        showInfo('Ad edited.');
    }
}

function loadAdDetails(ad) {

    $('#viewAdDetails').html($('<div>').append(
        $('<img>').attr('src', ad.imageUrl),
        $('<br>'),
        $('<label>').text('Title:'),
        $('<h1>').text(ad.title),
        $('<label>').text('Description:'),
        $('<p>').text(ad.description),
        $('<label>').text('Publisher:'),
        $('<div>').text(ad.publisher),
        $('<label>').text('Date:'),
        $('<div>').text(ad.date),
        $('<label>').text('Views:'),
        $('<div>').text(ad.views)
    ));

    showView('viewAdDetails');
}

function incrementViewCounter(ad){
    let data={
        title: ad.title,
        description: ad.description,
        publisher: ad.publisher,
        date: ad.date,
        price: ad.price,
        imageUrl: ad.imageUrl,
        views:Number(ad.views)+1
    };
    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adv/" + ad._id,
        headers: getKinveyUserAuthHeaders(),
        data: data,
        success:loadAdDetails,
        error: handleAjaxError
    });
}

function loadAdForEdit(ad) {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adv/" + ad._id,
        headers: getKinveyUserAuthHeaders(),
        success: loadAdForEditSuccess,
        error: handleAjaxError
    });

    function loadAdForEditSuccess(ad) {
        $('#formEditAd input[name=id]').val(ad._id);
        $('#formEditAd input[name=publisher]').val(ad.publisher);
        $('#formEditAd input[name=title]').val(ad.title);
        $('#formEditAd textarea[name=description]').val(ad.description);
        $('#formEditAd input[name=datePublished]').val(getDate()).prop('disabled',true);
        $('#formEditAd input[name=price]').val(ad.price);
        $('#formEditAd input[name=imgLink]').val(ad.imageUrl);
        $('#formEditAd input[name=views]').val(ad.views);

        showView('viewEditAd');
    }
}

function deleteAd(ad) {
    $.ajax({
        method: "DELETE",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adv/" + ad._id,
        headers: getKinveyUserAuthHeaders(),
        success: deleteAdSuccess,
        error: handleAjaxError
    });

    function deleteAdSuccess(response) {
        listAds();
        showInfo('Ad deleted.');
    }
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}
