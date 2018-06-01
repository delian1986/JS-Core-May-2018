function solve(input) {
    let args = input.map(Number);
    //dimensions of the matrix
    let rows = args[0];
    let cols = args[1];

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = null;
        }
    }

    //position of the stars
    let x = args[3];
    let y = args[2];

    //filling the matrix
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            matrix[row][col] = Math.max(Math.abs(y - row),Math.abs(x - col)) + 1;
        }
    }

    //print result
    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

    solve([5, 5, 2, 2]);