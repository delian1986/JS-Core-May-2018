function addDestination() {

    (function tableHandler(){
        let input = $('.inputData');
        let city = $(input[0]);
        let country = $(input[1]);
        let season = $('#seasons').val();

        if (city.val() !== '' && country.val() !== '') {
            let tr = `<tr><td>${city.val()}, ${country.val()}</td><td>${capitalize(season)}</td></tr>`;
            $('#destinationsList').append(tr);

            city.val('');
            country.val('');
            (function destinations() {
                switch (season) {
                    case 'summer':
                        let summerBox = Number($('#summer').val());
                        $('#summer').val(`${++summerBox}`);
                        break;
                    case 'autumn':
                        let autumnBox = Number($('#autumn').val());
                        $('#autumn').val(`${++autumnBox}`);
                        break;
                    case 'winter':
                        let winterBox = Number($('#winter').val());
                        $('#winter').val(`${++winterBox}`);
                        break;
                    case 'spring':
                        let springBox = Number($('#spring').val());
                        $('#spring').val(`${++springBox}`);
                }
            })();

        }
    })();
    function capitalize(season) {
        return season = season[0].toUpperCase() + season.substring(1)
    }
}