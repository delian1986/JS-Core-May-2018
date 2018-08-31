function userLogs(input) {
    let logs = new Map();

    for (let line of input) {
        if (line === 'end') {
            break;
        }
        let args = line.split(/=| /);

        let ip = args[1];
        let user = args[5];

        if (!logs.has(user)) {
            logs.set(user, new Map());
        }
        if (!logs.get(user).has(ip)) {
            logs.get(user).set(ip, 0);
        }
        let messageCount = logs.get(user).get(ip);
        logs.get(user).set(ip, ++messageCount)
    }

    let orderByUsername = [...logs].sort((a, b) => {
        return a[0].localeCompare(b[0])
    });

    for (let user of orderByUsername) {
        console.log(`${user[0]}: `);
        let resultFormat = [];
        for (let messages of [...user[1]]) {
            resultFormat.push(`${messages[0]} => ${messages[1]}`);
        }
        console.log(resultFormat.join(', ')+'.');
    }
}

userLogs(['IP=192.23.30.40 message=\'Hello&derps.\' user=destroyer',
    'IP=192.23.30.41 message=\'Hello&yall.\' user=destroyer',
    'IP=192.23.30.40 message=\'Hello&hi.\' user=destroyer',
    'IP=192.23.30.42 message=\'Hello&Dudes.\' user=destroyer',
    'end']);

// userLogs([ 'IP=FE80:0000:0000:0000:0202:B3FF:FE1E:8329 message=\'Hey&son\' user=mother',
//     'IP=192.23.33.40 message=\'Hi&mom!\' user=child0',
//     'IP=192.23.30.40 message=\'Hi&from&me&too\' user=child1',
//     'IP=192.23.30.42 message=\'spam\' user=destroyer',
//     'IP=192.23.30.42 message=\'spam\' user=destroyer',
//     'IP=192.23.50.40 message=\'\' user=yetAnotherUsername',
//     'IP=192.23.50.40 message=\'comment\' user=yetAnotherUsername',
//     'IP=192.23.155.40 message=\'Hello.\' user=unknown',
//     'end' ]);
