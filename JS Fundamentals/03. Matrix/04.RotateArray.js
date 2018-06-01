function solve(arr) {
    let numOfRotate=Number(arr[arr.length-1]);
    arr.splice(arr.length-1,1);
    let rotate=numOfRotate%arr.length;

    for (let i = 0; i < rotate; i++) {
        let elementToRotate=arr.pop();
        arr.unshift(elementToRotate);
    }

    console.log(arr.join(' '));

}

 solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
//solve(['1', '2', '3', '4', '2'])