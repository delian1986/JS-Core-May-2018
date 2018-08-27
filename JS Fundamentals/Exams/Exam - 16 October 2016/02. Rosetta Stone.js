function rosettaStone(input) {
    let patternLength = input.shift();
    let pattern = [];
    let stone = [];
    let message = '';
    for (let i = 0; i < patternLength; i++) {
        let row = input.shift().split(' ').map(Number);
        pattern.push(row)
    }
    // console.log(pattern);
    for (let i = 0; i < input.length; i++) {
        let row = input[i].split(' ').map(Number);
        stone.push(row)
    }

    for (let i = 0; i < stone.length; i++) {
        for (let j = 0; j < stone[0].length; j++) {
            let current = stone[i][j];
            let letter = pattern[i % pattern.length][j % pattern[0].length];
            message+=String.fromCharCode(64 + ((letter+current) % 27))
        }
    }

    message=message.replace(/@/g,' ');
    console.log(message);

}


// console.log(String.fromCharCode(64 + (63 % 27)));



rosettaStone(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']
);