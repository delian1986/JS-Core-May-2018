function airport(input) {
    let plainId = new Set();
    let townsToPassengers = {};
    let townsToPlains = {};

    for (let line of input) {
        let [plain, town, passengers, action] = line.split(/\s+/);

        if (action === 'land') {
            if (!plainId.has(plain)) {
                plainId.add(plain);

                if (!townsToPassengers.hasOwnProperty(town)){
                    townsToPassengers[town]={};
                    townsToPassengers[town]['arrivals']=0;
                    townsToPassengers[town]['departures']=0;
                }
                townsToPassengers[town]['arrivals']+=Number(passengers);

                if (!townsToPlains.hasOwnProperty(town)){
                    townsToPlains[town]=new Set();
                }
                townsToPlains[town].add(plain)
            }
        } else{
            if (plainId.has(plain)) {
                plainId.delete(plain);

                if (!townsToPassengers.hasOwnProperty(town)){
                    townsToPassengers[town]={};
                    townsToPassengers[town]['arrivals']=0;
                    townsToPassengers[town]['departures']=0;
                }
                townsToPassengers[town]['departures']+=Number(passengers);

                if (!townsToPlains.hasOwnProperty(town)){
                    townsToPlains[town]=new Set();
                }
                townsToPlains[town].add(plain)
            }
        }
    }

    let sortedPlainsLeft=Array.from(plainId).sort((a,b)=>a.localeCompare(b));
    let sortedTownsByArrivals=Object.keys(townsToPassengers).sort(function (a,b) {
        if (townsToPassengers[b].arrivals-townsToPassengers[a].arrivals!==0){
            return townsToPassengers[b].arrivals-townsToPassengers[a].arrivals
        }else{
            return a.localeCompare(b)
        }
    });
    // let sortedPlainsByTown=Object.keys(townsToPlains).sort((a,b)=>townsToPlains[a])

    console.log('Planes left:');
    for (let plain of sortedPlainsLeft) {
        console.log(`- ${plain}`);
    }
    for (let town of sortedTownsByArrivals) {
        console.log(town);
        console.log(`Arrivals: ${townsToPassengers[town].arrivals}`);
        console.log(`Departures: ${townsToPassengers[town].departures}`);
        let sortedPlains=Array.from(townsToPlains[town]).sort((a,b)=>a.localeCompare(b));
        console.log('Planes:');
        for (let id of sortedPlains) {
            console.log(`-- ${id}`);
        }
    }

    // // console.log(sortedPlainsLeft);
    // // console.log(sortedTownsByArrivals);
    // console.log('-'.repeat(4));
    // console.log(townsToPlains);

}

// airport([
//     "Boeing474 Madrid 300 land",
//     "AirForceOne WashingtonDC 178 land",
//     "Airbus London 265 depart",
//     "ATR72 WashingtonDC 272 land",
//     "ATR72 Madrid 135 depart"
// ]);

airport(['RTA72 London 140 land' ,
    'RTA72 Brussels 240 depart' ,
    'RTA72 Sofia 450 land' ,
    'RTA72 Lisbon 240 depart' ,
    'RTA72 Berlin 350 land' ,
    'RTA72 Otava 201 depart' ,
    'RTA72 Haga 350 land' ,
    'RTA72 Otava 201 depart' ,
    'RTA72 Dortmund 150 land' ,
    'RTA72 Montana 243 depart' ,
    'RTA72 Monreal 350 land' ,
    'RTA72 NewYork 201 depart' ,
    'RTA72 Pekin 350 land' ,
    'RTA72 Tokyo 201 depart' ,
    'RTA72 Warshaw 350 land' ,
    'RTA72 Riga 201 depart']);