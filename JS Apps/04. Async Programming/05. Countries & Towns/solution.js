//Shit code but working... Need rewrite...


const baseUrl = 'https://baas.kinvey.com/appdata/kid_HynsV71Em/';
const header = {'Authorization': 'Basic dXNlcjp1c2Vy'};

function attachEvents() {
    $('#btnLoadCountries').on('click', loadCountries);
    $('#btnViewTowns').on('click', loadTowns);
    $('#newTownBtn').on('click', addTown);
    $('#createNewBtn').on('click', addNewCountry);
    $('#moreTowns').on('click', addInputsToTowns);
}

function addInputsToTowns() {
    $('#townsList').append($('<input type="text"/>'));
}

function addNewCountry() {
    let country = $('#newCountry').val();
    $.ajax({
        method: 'POST',
        url: baseUrl + 'countries',
        data: {
            name: country
        },
        headers: header
    }).catch(loadError);

    let addCountry = $.ajax({
        method: 'GET',
        url: baseUrl + 'countries/' + `?query={"name":"${country}"}`,
        headers: header
    }).catch(loadError);

    Promise.all([addCountry]).then(addNewTowns);

    function addNewTowns(country) {
        let countryId = country[0][0]._id;
        console.log(country);
        let addTown;
        let inputs = $('#townsList input');
        console.log(inputs);
        for (let input of inputs) {
            let townToAdd = $(input).val();
            addTown = $.ajax({
                method: 'POST',
                url: baseUrl + 'towns',
                headers: header,
                data: {
                    name: townToAdd,
                    country_id: countryId
                }
            }).then(loadCountries).catch(loadError)
        }

    }


}

function addTown() {
    let newTown = $('#addNewTown').val();
    $('#addNewTown').val('');
    $.ajax({
        method: 'POST',
        url: baseUrl + 'towns',
        headers: header,
        data: {
            name: newTown,
            country_id: $('#countries').val()
        }
    }).catch(loadError)
}

function loadTowns() {
    let countryId = $('#countries').val();

    $.ajax({
        method: "GET",
        url: baseUrl + `towns/?query={"country_id":"${countryId}"}`,
        headers: header
    }).then(displayTowns).catch(loadError)
}

function displayTowns(towns) {
    $('#town-names').empty();

    let countryName = $('#countries :selected').text();
    $('#country-name').css("display", "block").text(`${countryName}`);
    $('#town-name').css("display", "block");
    $('#addTown').css("display", "block");
    for (let town of towns) {
        let editBtn = $('<button>Edit</button>').click(editTown);
        let delBtn = $('<button>Delete</button>').click(deleteTown);
        let divElement = $('<div>');
        divElement.append($(`<input type="text" id="${town._id}" value="${town.name}"/>`)).append(editBtn).append(delBtn);
        $('#town-names').append(divElement);

    }
}

function editTown() {
    let townId = ($(this).parent().find($('input')).attr('id'));
    let town = $(this).parent().find($('input')).val();
    $.ajax({
        method: "PUT",
        url: baseUrl + `towns/${townId}`,
        headers: header,
        data: {
            name: town,
            country_id: $('#countries').val()
        }
    }).then(loadTowns).catch(loadError)
}

function deleteTown() {
    console.log('delete');
    let townId = ($(this).parent().find($('input')).attr('id'));
    $.ajax({
        method: 'DELETE',
        url: baseUrl + 'towns/' + townId,
        headers: header
    }).then(loadTowns).catch(loadError)
}

function loadCountries() {
    let inputs = $('#addNewCountryField input');
    for (let input of inputs) {
        $(input).val('');
    }
    $.ajax({
        method: 'GET',
        url: baseUrl + 'countries',
        headers: header
    }).then(fullDropDownWithCountries).catch(loadError)
}

function fullDropDownWithCountries(countries) {
    for (let country of countries) {
        $('#countries').append($(`<option value="${country._id}">${country.name}</option>`));
    }
}

function loadError(err) {
    $('body').empty();
    $('body').append(err)
}