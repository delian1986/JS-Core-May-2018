let notify = (() => {
    // $(document).on({
    //     ajaxStart: () => $("#loadingBox").show(),
    //     ajaxStop: () => $('#loadingBox').fadeOut()
    // });
    $(document).on({
        ajaxStart: function () {
            $("button").prop('disabled', true);
            $("a").prop('disabled', true);
            $('#loadingBox').show()
        },
        ajaxStop: function () {
            $('#loadingBox').hide();
            $("button").prop('disabled', false);
            $("a").prop('disabled', false);
        }
    });
    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.find('span').text(message);
        infoBox.fadeIn();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.find('span').text(message);
        errorBox.fadeIn();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    function handleError(reason) {
        try{
        showError(reason.responseJSON.description);

        }catch (reason) {
            showError(reason)
        }
    }

    return {
        showInfo,
        showError,
        handleError
    }
})();