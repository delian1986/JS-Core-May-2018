function ironGirder(input) {
	// best time to destination
    let townTime = new Map();
	
	//total passagers to destination
    let townPassengers = new Map();

    for (let line of input) {
        if (line === 'Slide rule') {
            break
        }

        let [townName, args] = line.split(':');
        let [time, count] = args.split('->');

        if (time === 'ambush') {
            if (townTime.has(townName)) {
                townTime.set(townName,0);
                let currPassengers = Number(townPassengers.get(townName));
                townPassengers.set(townName, currPassengers - Number(count));
            }

        } else {
            if (!townTime.has(townName)) {
                townTime.set(townName, Number(time));
                townPassengers.set(townName, 0);
            }
            if (townTime.get(townName) > Number(time)||townTime.get(townName)===0) {
                townTime.set(townName, Number(time));
            }

            let currPassengers = Number(townPassengers.get(townName));
            townPassengers.set(townName, currPassengers + Number(count));
        }

    }

	//sort by best time asc and remove zero values
    let sortedTimes = [...townTime].sort((a, b) => {
        if (a[1] - b[1] !== 0) {
            return a[1] - b[1];
        } else {
            return a[0].localeCompare(b[0])
        }
    }).filter((a)=>a[1]!==0);


    for (let town of sortedTimes) {
        let passengers = townPassengers.get(town[0]);
        if (passengers >1) {
			//print only destinations with passangers
            console.log(`${town[0]} -> Time: ${town[1]} -> Passengers: ${passengers}`);
        }
    }

}
//
// ironGirder(['Sto-Lat:8->120',
//     'Ankh-Morpork:3->143',
//     'Sto-Lat:9->80',
//     'Ankh-Morpork:4->143',
//     'Sto-Lat:3->20',
//     'Quirm:12->40',
//     'Quirm:13->29',
//     'Slide rule']);

ironGirder(['Quirm:12->258',
    'Ankh-Morpork:ambush->200',
    'Ankh-Morpork:3->143',
    'Sto-Lat:4->80',
    'Ankh-Morpork:4->143',
    'Ankh-Morpork:ambush->143',
    'Sto-Lat:3->20',
    'Ankh-Morpork:5->17',
    'Slide rule']
)