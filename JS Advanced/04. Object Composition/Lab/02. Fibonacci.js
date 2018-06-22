function fibonacci (num) {
    let fib=[];
    fib[0]=1;

    let result=(function () {
        let fibFirst=0;
        let fibSec=1;
        return function () {
            let f2=fibFirst+fibSec;
            fibFirst=fibSec;
            fibSec=f2;
            fib.push(fibSec);
        }
    })();
    for (let i = 0; i < num; i++) {
        result();
    }
// console.log(fib);
    return fib;
}

fibonacci(15);