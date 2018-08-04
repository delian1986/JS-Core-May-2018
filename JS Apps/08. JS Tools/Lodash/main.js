let _ = require('lodash');

let last =_.findLast([1, 2, 3, 4], (n) => {
    return n % 2 === 0
});
console.log(last); // 4

for (let i = 0; i < 50; i++) {
    console.log(_.random(i,100)); //print random num between i and 100
}

