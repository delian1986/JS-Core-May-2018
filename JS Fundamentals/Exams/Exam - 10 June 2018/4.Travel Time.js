function travelTime(input) {
    let travel = {};

    //filling the object
    for (let route of input) {
        let [country, town, price] = route.split(' > ');

        //making all town to start with uppercase
        town = town.charAt(0).toUpperCase() + town.slice(1);

        if (!travel.hasOwnProperty(country)) {
            travel[country] = {};
            travel[country][town] = {};
            travel[country][town] = price;
        } else {
            if (!travel[country].hasOwnProperty(town)) {
                travel[country][town] = price;
            } else {
                if (travel[country].hasOwnProperty(town) && travel[country][town] > price) {
                    travel[country][town] = price
                }
            }
        }
    }

    //sort alphabetically
    let sortedCountries = Object.keys(travel).sort((a, b) => {
        return a > b
    });

    // print the result
    for (let country of sortedCountries) {
        let result = '';
        result += `${country} ->`;
        for (let town in travel[country]) {
            result += ` ${town} ->` + ` ${travel[country][town]}`;
        }
        console.log(result);
    }

}

travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]
);

