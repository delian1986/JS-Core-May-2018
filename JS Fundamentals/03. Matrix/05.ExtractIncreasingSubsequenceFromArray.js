function solve(arr) {
    arr=arr.map(Number);
    
    let result=arr.filter((x,i)=>x>=Math.max(...arr.slice(0,i+1))).join('\n');
    console.log(result);

}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);