function airPollution(matrix, forces) {
    let field = [];

    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i].split(/\W+/).map(Number);

        field.push(arr); //Populating field.


    }

    //console.log(poluted);
    //console.log(field);

    //Determinating commands.
    for (let arg of forces) {
        let args = arg.split(/\W+/);
        let command = args[0];
        let power = Number(args[1]);


        if (command.toLowerCase() === 'breeze' && power >= 0 && power < field.length) {
            for (let j = 0; j < field[power].length; j++) {
                field[power][j] -= 15;
                if (field[power][j] < 0) {
                    field[power][j] = 0;
                }
            }
        } else if (command.toLowerCase() === 'gale') {
            for (let i = 0; i < field.length; i++) {
                if (power >= 0 && power < field[i].length) {
                    field[i][power] -= 20;
                    if (field[i][power] < 0) {
                        field[i][power] = 0;
                    }
                }
            }
        } else if (command.toLowerCase() === 'smog') {
            for (let i = 0; i < field.length; i++) {
                for (let j = 0; j < field[i].length; j++) {
                    field[i][j] += power;
                }
            }
        }
    }

    //Search for polutions.
    let poluted = [];

    for (let j = 0; j < field.length; j++) {
        for (let i = 0; i < field[j].length; i++) {
            if (field[j][i] >= 50) {
                poluted.push(`[${j}-${i}]`);
            }

        }

    }


    if (poluted.length>0){
        console.log(`Polluted areas: ${poluted.join(', ')}`);

    }else{
        console.log('No polluted areas');
    }


}

airPollution(["5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
], ['breeze 1',
    'gale 2',
    'smog 25']);