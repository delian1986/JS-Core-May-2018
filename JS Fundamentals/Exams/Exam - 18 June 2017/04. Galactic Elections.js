function galacticElections(input) {
    let systems = {};
    let totalVotes = 0;

    for (let element of input) {
        if (!systems.hasOwnProperty(element.system)) {
            systems[element.system] = {};
        }
        if (!systems[element.system].hasOwnProperty(element.candidate)) {
            systems[element.system][element.candidate] = 0;
        }

        systems[element.system][element.candidate] += element.votes;
        totalVotes += element.votes;
    }

    for (let key in systems) {
        //getting the winner by most votes from current system
        let systemWinner = Object.keys(systems[key]).sort((a, b) => systems[key][b] - systems[key][a])[0]
        let totalSystemVotes = 0;

        //sum all votes
        for (let innerKey in systems[key]) {
            totalSystemVotes += systems[key][innerKey];
        }
        //rewrite the object with new props
        systems[key] = {};
        systems[key]['name'] = systemWinner;
        systems[key]['votes'] = totalSystemVotes;
    }

    let candidates = {};
    for (let key in systems) {
        if (candidates.hasOwnProperty(systems[key]['name'])) {
            candidates[systems[key]['name']] += systems[key]['votes'];
        } else {
            candidates[systems[key]['name']] = systems[key]['votes'];
        }
    }
    let sortedCandidates = Object.keys(candidates).sort((a, b) => candidates[b] - candidates[a]);
    let sortedPercentages = Object.values(candidates).sort((a, b) => b - a).map(a => Math.floor(a / totalVotes * 100));
    let sortedSystems = Object.keys(systems).sort((a, b) => systems[b]['votes'] - systems[a]['votes']);

    if (sortedPercentages[0] > 50) {
        console.log(`${sortedCandidates[0]} wins with ${candidates[sortedCandidates[0]]} votes`);
        if (sortedPercentages.length > 1) {
            console.log(`Runner up: ${sortedCandidates[1]}`);
            for (let key of sortedSystems) {
                if (systems[key]['name']===sortedCandidates[1]){
                    console.log(key + ': ' + systems[key]['votes']);
                }
            }
        }else{
            console.log(`${sortedCandidates[0]} wins unopposed!`);
        }
    }else {
        console.log(`Runoff between ${sortedCandidates[0]} with ${sortedPercentages[0]}% and ${sortedCandidates[1]} with ${sortedPercentages[1]}%`)
    }
}

galacticElections([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
    {system: 'Tau', candidate: 'Space Cow', votes: 15},
    {system: 'Sigma', candidate: 'Space Cow', votes: 60},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]
);