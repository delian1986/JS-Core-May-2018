function solve(arr) {
    let isMagic=true;

    //compare sums by row
    let sum=arr[0].reduce((a,b)=>a+b);
    for (let row = 1; row < arr.length; row++) {
        let currSum=arr[row].reduce((a,b)=>a+b);
        if (sum!=currSum){
            isMagic=false;
            break;
        }
    }
    if (!isMagic){
        console.log(isMagic);
        return;
    } else{//compare sum by col
        for (let col = 0; col < arr[0].length; col++) {
            let currColSum=arr.reduce((a,b)=>a+b[col],0);
            if (currColSum!=sum){
                isMagic=false;
                break;
            }
        }
    }
    console.log(isMagic);
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
    [5, 5, 6]
    ]
);