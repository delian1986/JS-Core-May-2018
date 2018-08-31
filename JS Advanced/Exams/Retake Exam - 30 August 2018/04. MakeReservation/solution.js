function makeReservation(target) {
    //select dom elements
    let submit = $('#submit');
    let editBtn = $('#edit');
    let contBtn = $('#continue');
    let info = $('#infoPreview');
    let inputs = $('.inputLabel');

    //input values to custom array
    let fields = [];

    //mandatory input fields
    let fullName = $('#fullName');
    let email = $('#email');

    //events
    submit.on('click', collectInfo);
    editBtn.on('click', edit);
    contBtn.on('click', generatePaymentMethods);

    //collecting user info
    function collectInfo() {

        if (fullName.val() !== '' && email.val() !== '') {
            submit.prop('disabled', true);
            fillPreview();
        }
    }

    //preview section
    function fillPreview() {
        for (let element of inputs) {
            let fieldValue = $(element).find($('input'));
            let fieldName = $(element).text();
            fields.push(fieldValue.val());
            if (fieldValue.val() !== '') {
                if (fieldName === 'Phone Number') {
                    // phone field should be exact
                    fieldName = 'Phone';
                }
                //append to <ul>
                info.append(`<li>${fieldName}: ${fieldValue.val()}</li>`);
                fieldValue.val('');
            }
        }
        editBtn.prop('disabled', false);
        contBtn.prop('disabled', false);
    }

    //edit input info
    function edit() {
        submit.prop('disabled', false);
        editBtn.prop('disabled', true);
        contBtn.prop('disabled', true);

        //filling back to input fields
        let count = 0;
        for (let element of inputs) {
            let fieldValue = $(element).find($('input'));
            fieldValue.val(fields[count++])
        }

        //empty custom array and <ul>
        fields.length = 0;
        info.empty();
    }

    //generating payment methods
    function generatePaymentMethods() {
        editBtn.prop('disabled', true);
        contBtn.prop('disabled', true);
        submit.prop('disabled', true);

        //payment dom section
        let container = $(target);
        container.append('<h2>Payment details</h2>');
        let selectMenu = $('<select>').attr('id', 'paymentOptions').addClass('custom-select');
        selectMenu.append($('<option selected="" disabled="" hidden="">Choose</option>'));
        selectMenu.append($('<option value="creditCard">Credit Card</option>'));
        selectMenu.append($('<option value="bankTransfer">Bank Transfer</option>'));


        container.append(selectMenu);
        container.append($('<div>').attr('id', 'extraDetails'));
        selectMenu.on('change', payments);


        function payments() {
            let method = ($(this).val());
            let details = $('#extraDetails');
            switch (method) {
                case 'creditCard':
                    details.empty();
                    cardDetails();
                    break;
                case 'bankTransfer':
                    details.empty();
                    bankTransfer();
                    break;
            }

            function cardDetails() {
                let cardNumber = $('<div class="inputLabel">Card Number<input></div><br>');
                let date = $('<div class="inputLabel">Expiration Date<input></div><br>');
                let security = $('<div class="inputLabel">Security Numbers<input></div><br>');
                let checkoutBtn = $('<button>').attr('id', 'checkOut').text('Check Out');
                details.append(cardNumber);
                details.append(date);
                details.append(security);
                details.append(checkoutBtn);
                $('#checkOut').on('click', finalizingPayment);
            }

            function bankTransfer() {
                let transferDetails = $('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>');
                let checkoutBtn = $('<button>').attr('id', 'checkOut').text('Check Out');
                details.append(transferDetails);
                details.append(checkoutBtn);
                $('#checkOut').on('click', finalizingPayment);
            }
        }

        function finalizingPayment() {
            let wrapper=$('#wrapper');
            wrapper.empty();
            wrapper.append($('<h4>Thank you for your reservation!</h4>'))
        }


    }
}