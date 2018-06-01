function solve(input) {
    let matrix=input.map(row=>row.split(" ").map(Number));
    let mainDiagonal=0;
    let secondDiagonal=0;

    for (let i = 0; i < matrix.length; i++) {
    //calculate leftTop to rightBotton diagonal
            mainDiagonal+=matrix[i][i];

    //calculate leftBotton to rightTop diagonal
            secondDiagonal+=matrix[i][matrix[i].length-i-1];
    }

    if (mainDiagonal===secondDiagonal){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row==col||row+col+1==matrix.length){
                    continue;
                }

                    matrix[row][col]=mainDiagonal;

            }
        }
    }
    console.log(matrix.map(row => row.join(" ")).join("\n"));;
}
// solve(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']
// );

solve(['1 1 1',
    '1 1 1',
    '1 1 0']
);