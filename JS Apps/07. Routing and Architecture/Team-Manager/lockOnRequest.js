$(document).on({
    ajaxStart: function () {
        $('#infoBox').text('Loading...'); //use careful ! :)
        $("input").prop('disabled', true);
    },
    ajaxStop: function () {
        $('#infoBox').hide();
        $("input").prop('disabled', false);

    }
});