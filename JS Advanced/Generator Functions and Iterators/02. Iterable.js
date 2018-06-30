function reverseArrayIterable(array) {
    let index = array.length - 1;

    return {
        [Symbol.iterator]:function(){
            return this
        },
        ['next']: function (){
            if (index >= 0) {
                return {done: false, value: array[index--]}
            } else {
                return {done: true};
            }
        }
    }
}

console.log(reverseArrayIterable([10, 20, 30]));
for (let item of reverseArrayIterable([10, 20, 30])) {
    console.log(item);
}

