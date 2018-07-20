function attachEvents() {
    $('#getVenues').on('click', getVenues);
    const header = {'Authorization': 'Basic Z3Vlc3Q6cGFzcw=='};

    function getVenues() {
        let date = $('#venueDate').val();
        console.log(date);
        const postDateUrl = `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${date}`;
        $.ajax({
            method: 'POST',
            url: postDateUrl,
            headers: header
        }).then(getThisDayVenues).catch(displayError)
    }

    function getThisDayVenues(response) {
        const getVenueUrl = 'https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/';
        for (let event of response) {
            $.ajax({
                method: 'GET',
                url: getVenueUrl + event,
                headers: header
            }).then(displayVenue).catch(displayError)
        }
    }

    function displayVenue(venue) {
        let divBlock = $(`<div class="venue" id="${venue._id}">`);
        divBlock.append(`<span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>`);
        let venueDetails = $(`<div class="venue-details" style="display: none;">`);
        let table = $('<table>');
        table.append(`<tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>`)
            .append($('<tr>'))
            .append($(`<td class="venue-price">${venue.price} lv</td>`));
        let td=($('<td>'));
        let select = ($(`<select class="quantity">`))
            .append($('<option value="1">1</option>'))
            .append($('<option value="2">2</option>'))
            .append($('<option value="3">3</option>'))
            .append($('<option value="4">4</option>'))
            .append($('<option value="5">5</option>'));
        td.append(select);
        table.append(select);
        table.append($('<td><input class="purchase" type="button" value="Purchase"></td>'));


        let descriptionSection=$('<span class="head">Venue description:</span>');
        descriptionSection.append($(`<p class="description">${venue.description}</p>`))
            .append($(`<p class="description">Starting time: ${venue.startingHour}</p>`));
        venueDetails.append(table);
        venueDetails.append(descriptionSection);
        divBlock.append(venueDetails);
        $('#venue-info').append(divBlock);

        $('#moreInfo').on('')

    }

    function displayError(err) {
        $('#venue-info').append(err.statusText)
    }
}