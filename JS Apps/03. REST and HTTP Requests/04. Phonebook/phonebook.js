function attachEvents() {
    const baseUrl = "https://phonebook-nakov.firebaseio.com/phonebook";

    $('#btnLoad').on('click', loadContacts);
    $('#btnCreate').on('click', createContact);

    function createContact() {
        let person = $('#person').val();
        let phone = $('#phone').val();
        if (person !== '' && phone !== '') {
            $.ajax({
                method: "POST",
                url: baseUrl + '.json',
                data: JSON.stringify({person, phone})
            }).then(loadContacts).catch(loadError)
        }
    }

    function loadContacts() {
        $('#person').val('');
        $('#phone').val('');
        $.ajax({
            method: 'GET',
            url: baseUrl + '.json'
        }).then(displayContacts).catch(loadError);
    }

    function displayContacts(contacts) {
        $('#phonebook').empty();
        for (let line in contacts) {
            let li = $('<li>');
            li.text(`${contacts[line].person}: ${contacts[line].phone}`).append($('<button>[Delete]</button>').click(deleteContact));
            $('#phonebook').append(li);

            function deleteContact() {
                $.ajax({
                    method: "DELETE",
                    url: baseUrl + "/" + line + '.json'
                }).then(loadContacts).catch(loadError)
            }
        }


    }
    function loadError(err) {
        $('#phonebook').append($(`<li>${err}</li>`))
    }
}