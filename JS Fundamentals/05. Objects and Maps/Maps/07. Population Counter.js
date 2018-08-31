function populationCounter(input) {
    let countryTown = new Map();
    // let townPop = new Map();
    let countryTotal = new Map();

    for (let line of input) {
        if (line === 'report') {
            break;
        }
        let [town, country, pop] = line.split('|');

        if (!countryTown.has(country)) {
            countryTown.set(country, new Map());
            countryTotal.set(country, 0)
        }

        if (!countryTown.get(country).has(town)) {
            countryTown.get(country).set(town,0);
        }
        let population = countryTotal.get(country);
        countryTotal.set(country, Number(population) + Number(pop));
        population=countryTown.get(country).get(town);
        countryTown.get(country).set(town,Number(population) + Number(pop));
    }

    let sortedCountryTotal = [...countryTotal].sort((a, b) => {
        return b[1] - a[1];
    });

    for (let country of sortedCountryTotal) {
        console.log(`${country[0]} (total population: ${country[1]})`);
        let sortedTowns=[...countryTown.get(country[0])].sort((a,b)=>{
            return b[1]-a[1]
        });
        for (let town of sortedTowns) {
            console.log(`=>${town[0]}: ${town[1]}`);
        }
    }
}

populationCounter(['Sofia|Bulgaria|1',
    'Varna|Bulgaria|2',
    'London|UK|4',
    'Rome|Italy|3',
    'report']);