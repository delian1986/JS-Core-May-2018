function reverseArrayIterator(array) {
    let index=array.length-1;
    return{
        next:function () {
            return index>=0?
                {value:array[index--],done: false}
                :{done:true};
        }
    };
}

let iterator = reverseArrayIterator([10, 20, 30]);
console.log(iterator.next().value);

console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);