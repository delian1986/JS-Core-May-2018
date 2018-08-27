function radicalMarketing(input) {
    let log = {};
    let subscriptions = {};
    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i].split("-");

        if (currentCommand.length === 2) {
            if (log.hasOwnProperty(currentCommand[0]) && log.hasOwnProperty(currentCommand[1])) {
                log[currentCommand[1]].add(currentCommand[0]);
                subscriptions[currentCommand[0]].add(currentCommand[1]);
            }
        } else {
            if (!log.hasOwnProperty(currentCommand[0])) {
                log[currentCommand[0]] = new Set();
                subscriptions[currentCommand[0]] = new Set();
            }
        }
    }


    let sortedLog = Object.keys(log).sort(function (first, second) {
        let firstEntry = first;
        let firstEntrySubscribers = log[first].size;


        let secondEntry = second;
        let secondEntrySubscribers = log[second].size;

        let result = secondEntrySubscribers - firstEntrySubscribers;
        if (result === 0) {
            let firstEntrySubscriptions = subscriptions[firstEntry].size;
            let secondEntrySubscriptions = subscriptions[secondEntry].size;

            result = secondEntrySubscriptions - firstEntrySubscriptions;
        }
        return result;
    });
    let mostImportant = sortedLog[0];

    console.log(mostImportant[0]);
    [...log[mostImportant]].forEach((val, index) => {
        console.log(`${index + 1}. ${val}`);
    });
}

radicalMarketing(['A', 'B', 'C', 'D', 'A-B', 'B-A', 'C-A', 'D-A', 'J-B']);
// radicalMarketing([
//     "T",
//     "E",
//     "S",
//     "T",
//     "D-D",
//     "Q-P",
//     "R-D"
// ]);