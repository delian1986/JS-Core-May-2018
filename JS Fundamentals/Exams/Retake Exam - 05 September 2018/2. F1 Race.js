function f1Race(input) {
    let players = input.shift().split(' ').filter(w => w !== '');

    for (const line of input) {
        let [action, pilot] = line.split(' ').filter(w => w !== '');

        switch (action) {
            case 'Join':
                if (!players.includes(pilot)) {
                    players.push(pilot)
                }
                break;

            case 'Crash':
                if (players.includes(pilot)) {
                    players = players.filter(item => item !== pilot)
                }
                break;

            case 'Pit':
                if (players.includes(pilot)) {
                    let indexOfPilot = players.indexOf(pilot);
                    if (indexOfPilot !== players.length - 1) {
                        let nextPilot = players[indexOfPilot + 1];
                        players[indexOfPilot] = nextPilot;
                        players[indexOfPilot + 1] = pilot;
                    }
                }
                break;

            case 'Overtake':
                if (players.includes(pilot)) {
                    let indexOfPilot = players.indexOf(pilot);
                    if (indexOfPilot !== 0) {
                        let prevPilot = players[indexOfPilot - 1];
                        players[indexOfPilot] = prevPilot;
                        players[indexOfPilot - 1] = pilot;
                    }
                    break;
                }
        }
    }

    console.log(players.join(' ~ '));
}

// f1Race(["Vetel Hamilton Slavi",
//     "Pit Hamilton",
//     "Overtake Vetel",
//     "Crash Slavi"]
// );

f1Race(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"]
);