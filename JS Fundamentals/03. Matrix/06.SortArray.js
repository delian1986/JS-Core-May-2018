function solve(arr) {
    //sort by alphabetical, then by lenght
    arr.sort().sort((a,b)=>a.length>b.length);
    console.log(arr.join('\n'));
}
solve(['test', 'Deny', 'omen', 'Default']);