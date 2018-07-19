function attachEvents(){

    $('#submit').on('click',function () {
        let locationInput=$('#location').val();
        let location='';

        switch (locationInput){
            case 'New York':
                location='ny';
                break;
            case 'London':
                location='london';
                break;
            case 'Barcelona':
                location='barcelona';
                break;
        }

        let todayUrl=`https://judgetests.firebaseio.com/forecast/today/${location}.json`;
        let threeDaysUrl=`https://judgetests.firebaseio.com/forecast/upcoming/${location}.json`;

        let locationForecast=$.ajax({
            method:'GET',
            url:todayUrl
        });

        let threeDaysForecast=$.ajax({
            method:'GET',
            url:threeDaysUrl
        });

        Promise.all([locationForecast,threeDaysForecast])
            .then(displayForecast)
            .catch(displayError)
    });

    function displayForecast([today,threeDays]) {

        //display Today
        const degreeSymb='&#176';
        let highTemp=today.forecast.high+degreeSymb;
        let lowTemp=today.forecast.low+degreeSymb;
        let todayForecast=today.forecast.condition;
        let conditionSymbol=determinatingConditionSymbol(todayForecast);

        //display for today
        (function () {
            $('#forecast').css('display','block');
            $('#current').append($(`<span class="condition symbol">${conditionSymbol}</span>`));
            let conditionSpan=$('<span class="condition">');
            conditionSpan.append($(`<span class="forecast-data">${today.name}</span>`))
                .append($(`<span class="forecast-data">${lowTemp}/${highTemp}</span>`))
                .append($(`<span class="forecast-data">${todayForecast}</span>`));

            $('#current').append(conditionSpan);
        })();

        //display for next three days
        (function () {
            for (let day of threeDays.forecast) {
                highTemp=day.high+degreeSymb;
                lowTemp=day.low+degreeSymb;
                let symbol=determinatingConditionSymbol(day.condition);
                let upcommingSpan=$('<span class="upcoming">');
                upcommingSpan.append($(`<span class="symbol">${symbol}</span>`))
                    .append($(`<span class="forecast-data">${lowTemp}/${highTemp}</span>`))
                    .append($(`<span class="forecast-data">${day.condition}</span>`));

                $('#upcoming').append(upcommingSpan)
            }
        })();
    }

    function displayError(err) {
        $('.label').text(err)
    }

    function determinatingConditionSymbol(todayForecast) {
        switch (todayForecast){
            case 'Sunny':
                return'&#x2600';
            case 'Partly sunny':
                return'&#x26C5';
            case 'Overcast':
                return '&#x2601';
            case 'Rain':
                return '&#x2614';
        }
    }

}