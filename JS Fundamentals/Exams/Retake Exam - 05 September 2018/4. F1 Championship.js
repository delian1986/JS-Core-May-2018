function f1Champioship(input) {
    let teams = new Map();
    let teamPoints = new Map();

    for (let line of input) {
        let [team, pilot, points] = line.split(' -> ').filter(w => w !== '');

        if (!teams.has(team)) {
            teams.set(team, new Map());
            teamPoints.set(team, 0)
        }
        if (!teams.get(team).has(pilot)) {
            teams.get(team).set(pilot, 0);
        }
        let currPoints = teams.get(team).get(pilot);
        teams.get(team).set(pilot, currPoints + Number(points));

        let currTeamPoints = teamPoints.get(team);
        teamPoints.set(team, currTeamPoints + Number(points))
    }

    let sortedByTeamPoints = [...teamPoints].sort((a, b) => {
        return (b[1] - a[1]);
    }).slice(0, 3);

    for (let team of sortedByTeamPoints) {
        console.log(`${team[0]}: ${team[1]}`);

        let sortedPilots = [...teams.get(team[0])].sort((a, b) => {
            return b[1] - a[1];
        });

        for (let pilot of sortedPilots) {
            console.log(`-- ${pilot[0]} -> ${pilot[1]}`);
        }
    }
}

f1Champioship(["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"]
);