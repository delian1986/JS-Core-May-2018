function aMinerTask(input) {
    let resources = new Map();

    for (let i = 0; i < input.length; i += 2) {
        if (input[i] === 'stop') {
            break;
        } else {
            if (!resources.has(input[i])) {
                resources.set(input[i], 0)
            }
            let quantity = resources.get(input[i]);
            resources.set(input[i], quantity + Number(input[i + 1]))
        }
    }
    for (const element of [...resources]) {
        console.log(`${element[0]} -> ${element[1]}`);
    }
}

aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'stop']);