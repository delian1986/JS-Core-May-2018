function solve(arr) {
    let delimiter=arr[arr.length-1];
    let result=[];

    for (let i = 0; i < arr.length-1; i++) {
        result[i]=arr[i];
    }

    console.log(result.join(`${delimiter}`));
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);