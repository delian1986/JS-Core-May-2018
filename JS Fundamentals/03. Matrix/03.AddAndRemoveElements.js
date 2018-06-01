function solve(arr) {
    let result=[];
    let elements=1;

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]){
            case 'add':
                result.push(elements++);
                //elements++;
                break;
            case 'remove':
                result.pop();
                elements++;
                break;
        }
    }

    if (result.length==0){
        console.log('Empty');
    }else{
        for (const resultElement of result) {
            console.log(resultElement);
        }
    }
}
solve(['add', 'add', 'remove', 'add', 'add']);
// solve(['remove', 'remove', 'remove']);
