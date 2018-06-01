function solve(n) {
    let resultMatrix = [];
    let elements=1;
    let cols=n;
    let rows=n;

    //initalizing empty matrix
    for (let i = 0; i < n; i++) {
        resultMatrix.push([]);
    }

    let startRow=0, startCol=0, endRow=rows-1,endCol=cols-1;
    
    while(startRow<=endRow||startCol<=endCol){

        //filling up first row
        for (let i = startCol; i <= endCol; i++) {
            resultMatrix[startRow][i]=elements++;
        }

        //filling up last col
        for (let i = startRow+1; i <= endRow; i++) {
            resultMatrix[i][endCol]=elements++;
        }

        //filling last row
        for (let i = endCol-1; i >= startCol; i--) {
            resultMatrix[endRow][i]=elements++;
        }

        //filling first column
        for (let i = endRow-1; i > startRow; i--) {
            resultMatrix[i][startCol]=elements++;
        }

        //going in deeper in spiral
        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }
    console.log(resultMatrix.map(row=>row.join(' ')).join('\n'));


}

//solve(5, 5);
solve(3,3);