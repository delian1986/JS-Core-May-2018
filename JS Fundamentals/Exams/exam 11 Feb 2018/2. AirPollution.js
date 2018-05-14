function airPollution(matrix, forces) {
    let field = [];
    let poluted = [];

    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i].split(/\W+/).map(Number);

        field.push(arr); //Populating field.

        //Search for polutions.
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] >= 50) {
                poluted.push([i, j]);
            }
        }
    }

    //console.log(poluted);
    //console.log(field);

    //Determinating commands.
    for (let arg of forces) {
        let args = arg.split(/\W+/);
        let command = args[0];
        let power = parseInt(args[1]);


        switch (command) {
            case 'breeze': {
                for (let i = 0; i < field.length; i++) {

                    //let currPosition = field[power][i];
                    field[power][i] -= 15;
                    let currPos = [];
                    currPos.push(power, i);


                    for (let row of poluted) {
                        if (JSON.stringify(currPos) === JSON.stringify(row)) {
                            //console.log('done');
                            if (field[power][i] < 0) {
                                field[power][i] = 0;
                            }
                        }
                    }

                }
                console.log(field);
                break;
            }
            case 'gale': {
                for (let i = 0; i < field.length; i++) {

                    //let currPosition = field[power][i];
                    field[i][power] -= 20;
                    let currPos = [];
                    currPos.push(i, power);


                    for (let row of poluted) {
                        if (JSON.stringify(currPos) === JSON.stringify(row)) {
                            //console.log('done');
                            if (field[i][power] < 0) {
                                field[i][power] = 0;
                            }
                        }
                    }

                }
                console.log(field);
                break;
            }
            case 'smog':
                for (let row = 0; row < field.length; row++) {
                    for (let col = 0; col < field[row].length; col++) {
                        field[row][col] += power;
                        if (field[row][col] >= 50) {
                            let currPos = [];
                            currPos.push(row, col);

                            for (let currRow of poluted) {
                                if (JSON.stringify(currPos) === JSON.stringify(currRow)) {
                                    //console.log('done');
                                    continue;
                                }
                                    poluted.push([row, col]);
                                    console.log(row,col);
                            }
                        }
                    }
                }
                console.log(field);
                break;
        }
    }

    console.log(poluted.filter());

// console.log(field);


}

airPollution(["5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
], ['breeze 1',
    'gale 2',
    'smog 25']);