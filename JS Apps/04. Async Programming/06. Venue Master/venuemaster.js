//this code need rework


function attachEvents() {
    $('#getVenues').on('click', getVenues);
    const header = {'Authorization': 'Basic Z3Vlc3Q6cGFzcw=='};

    function getVenues() {
        let date = $('#venueDate').val();
        const postDateUrl = `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${date}`;
        $.ajax({
            method: 'POST',
            url: postDateUrl,
            headers: header
        }).then(getThisDayVenues).catch(displayError)
    }

    function getThisDayVenues(response) {
        const getVenueUrl = 'https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/';
        $('#venue-info').empty();
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
        let td = ($('<td>'));
        let select = ($(`<select class="quantity">`))
            .append($('<option value="1">1</option>'))
            .append($('<option value="2">2</option>'))
            .append($('<option value="3">3</option>'))
            .append($('<option value="4">4</option>'))
            .append($('<option value="5">5</option>'));
        td.append(select);
        table.append(select);
        table.append($('<td><input class="purchase" type="button" value="Purchase"></td>'));


        let descriptionSection = $('<span class="head">Venue description:</span>');
        descriptionSection.append($(`<p class="description">${venue.description}</p>`))
            .append($(`<p class="description">Starting time: ${venue.startingHour}</p>`));
        venueDetails.append(table);
        venueDetails.append(descriptionSection);
        divBlock.append(venueDetails);

        $('#venue-info').append(divBlock);
        $('.purchase').on('click', purchase);
        $('.info').on('click', info)
    }

    function info() {
        $('.venue-details').hide();
        $(this).parent().parent().find('.venue-details').show();
    }

    function purchase() {
        console.log($(this));
        let id = $(this).parent().parent().parent().parent().parent().attr('id');
        let name = $(this).parent().parent().parent().parent().parent().find(".venue-name").text();
        let qty = Number($(this).parent().parent().find(".quantity").val());
        let price = Number($(this).parent().parent().find(".venue-price").text().substring(0, $(this).parent().parent().find(".venue-price").text().length - 2));

        $('#venue-info').html(`<span class="head">Confirm purchase</span>
<div class="purchase-info">
  <span>${name}</span>
  <span>${qty} x ${price}</span>
  <span>Total: ${qty * price} lv</span>
  <input type="button" value="Confirm">
</div>`);

        $('#venue-info input').click(function () {
            let request = {
                method: "POST",
                url: `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${id}&qty=${qty}`,
                headers: header
            };

            $.ajax(request).then(function (data) {
                $('#venue-info').html("You may print this page as your ticket" + data.html);
            })
        })
    }


    function displayError(err) {
        $('#venue-info').append(err.statusText)
    }
}