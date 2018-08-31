function logsAggregator (input) {
    let lines=Number(input.shift());
    let userIp=new Map();
    let userTotal=new Map();

    for (let i = 0; i < lines; i++) {
        let [ip,user,time]=input[i].split(' ');
        if (!userIp.has(user)){
            userIp.set(user,new Set());
            userTotal.set(user,0);
        }
        userIp.get(user).add(ip);
        let currTime=userTotal.get(user);
        userTotal.set(user,Number(time)+Number(currTime));
    }

    let sortedUsernames=[...userIp].sort((a,b)=>{
        return a[0].localeCompare(b[0]);
    });

    for (let user of sortedUsernames) {
        let time=userTotal.get(user[0]);
        let sortedIp=[...user[1]].sort((a,b)=>a.localeCompare(b));
        console.log(`${user[0]}: ${time} [${sortedIp.join(', ')}]`);
    }
}

logsAggregator([ '7',
    '192.168.0.11 peter 33',
    '10.10.17.33 alex 12',
    '10.10.17.35 peter 30',
    '10.10.17.34 peter 120',
    '10.10.17.34 peter 120',
    '212.50.118.81 alex 46',
    '212.50.118.81 alex 4',
    '' ]);