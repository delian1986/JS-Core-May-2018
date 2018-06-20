function aggregates(array) {
    let sum=array.reduce((acc,curr)=>acc+curr);
    let min=array.reduce((acc,curr)=>Math.min(acc,curr));
    let max=array.reduce((acc,curr)=>Math.max(acc,curr));
    let product=array.reduce((acc,curr)=>acc*curr);
    let arrString=array.reduce(function(prevVal,currVal,idx){
        return idx === 0 ? currVal : prevVal + '' + currVal;
    });

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${arrString}`);

}

aggregates([2,3,10,5]);