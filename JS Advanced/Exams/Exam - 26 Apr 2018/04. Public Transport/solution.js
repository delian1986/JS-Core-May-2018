//90/100


class PublicTransportTable {
    constructor(town) {
        this.tableName(town);
        this.attachEvents();
    }

    tableName(town) {
        $('caption').text(`${town}\'s Public Transport`)
    }

    addVehicle(vehicleObj) {
        let tr = $('<tr>' +
            `<td>${vehicleObj.type}</td>` +
            `<td>${vehicleObj.name}</td>`);
        let button = $('<button>More Info</button></td>');
        let extraInfo = $('<tr class="more-info"><td colspan="3"><table>' +
            `<tr><td>Route: ${vehicleObj.route}</td></tr>` +
            `<tr><td>Price: ${vehicleObj.price}</td></tr>` +
            `<tr><td>Driver: ${vehicleObj.driver}</td></tr>`);

        button.on('click', function () {
            if ($(this).text() === 'More Info') {
                $(this).text('Less Info');
                extraInfo.insertAfter(tr);
            } else {
                $(this).text('More Info');
                extraInfo.remove()
            }
        });
        let td = $('<td>');
        td.append(button);
        tr.append(td);

        $('.vehicles-info').append(tr);

    }

    attachEvents() {
        //clear btn
        $('.clear-btn').on('click', function () {
            $('input[name="type"]').val('');
            $('input[name="name"]').val('');
            let rows = $('.vehicles-info>tr');
            for (let i = 0; i < rows.length; i++) {
                $(rows[i]).css('display', '')
            }
        });
        //search btn
        $('.search-btn').on('click', function () {
            let typeInput = $('input[name="type"]');
            let nameInput = $('input[name="name"]');

            let type = $('input[name="type"]').val();
            let name = $('input[name="name"]').val();

            if (name || type) {
                let rows = $('.vehicles-info>tr').not('.more info');
                for (let i = 0; i < rows.length; i++) {
                    let typeRow = $(rows[i]).find('td').eq(0).text();
                    let nameRow = $(rows[i]).find('td').eq(1).text();
                    if (!typeRow.includes(type) || !nameRow.includes(name)) {
                        $(rows[i]).css('display', 'none');
                        let btn = $(rows[i]).find('td').eq(2).find('button');
                        if (btn.text() === 'Less Info') {
                            btn.click()
                        }
                    } else {
                        $(rows[i]).css('display', '');
                    }
                }
            }
        })
    }
}