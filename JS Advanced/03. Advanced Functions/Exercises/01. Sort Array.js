function sortArray(array, order) {
    if (order === 'asc') {
        array.sort((a, b) => a - b);
    } else {
        array.sort((a, b) => b - a);
    }

    return array;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
// solve([14, 7, 17, 6, 8], 'desc');

