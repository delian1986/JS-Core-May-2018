function weather(input) {
    let regex = /([A-Z]{2})(\d+\.\d+)([A-Za-z]+)\|/;
    let cityTemp = {};
    let cityForecast = {};
    let match;

    for (let line of input) {
        match = regex.exec(line);
        if (match !== null) {
            let city = match[1];
            let temp = Number(match[2]);
            let type = match[3].toLowerCase();
            type = type[0].toUpperCase() + type.substr(1);

            if (!cityTemp.hasOwnProperty(city)) {
                cityTemp[city] = {};
            }
            cityTemp[city] = {};
            cityTemp[city] = temp;

            if (!cityForecast.hasOwnProperty(city)) {
                cityForecast[city]={}
            }
            cityForecast[city]=type;
        }
    }

    let sortedTemps=Object.keys(cityTemp).sort((a,b)=>{
        return cityTemp[a]-cityTemp[b];
    });

    for (let city of sortedTemps) {
        console.log(`${city} => ${cityTemp[city].toFixed(2)} => ${cityForecast[city]}`);
    }

}

weather(['PB23.41Rainy|ASDASD',
    'SDASCA20.21sUNNY|SDASD',
    'asdaCA22.5rainy|sada',
    'CA23.41cloydy']);

// weather(['invalidKA31.41|sunny|' ,
//     'validCA12.41Rainy|absad' ,
//     'gfASFasASPA31.21cloudy|asd' ,
//     'YA21.51sunny|' ,
//     'sadL21.41rainy|adas']);