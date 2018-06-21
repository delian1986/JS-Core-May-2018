// function solution() {
//     let add = (vec1, vec2) => [vec1[0] + vec2[0], vec1[1] + vec2[1]];
// return{add}
// }
let solution = (() => {

    return {
        add: (arr1, arr2) => {
            let arr = [];
            arr[0] = Number(arr1[0]) + Number(arr2[0]);
            arr[1] = Number(arr1[1]) + Number(arr2[1]);
            return arr
        },
        multiply: (arr1, scalar) => {
            let arr = [];
            for (let arrElement of arr1) {
                arr.push(Number(arrElement * scalar))
            }
            return arr
        },
        length: (arr1) => {
            let result = 0;
            for (let arrElement of arr1) {
                result += Math.pow(Number(arrElement), 2)
            }
            return Math.sqrt(Number(result));
        },
        dot: (arr1, arr2) => {
            let result = 0;
            result += arr1[0] * arr2[0];
            result += arr1[1] * arr2[1];

            return result;
        },
        cross: (arr1, arr2) => {
            let result = arr1[0] * arr2[1];
            result -= arr1[1] * arr2[0];

            return result;

        }

    }
})();

// console.log(solution.add([1, 1], [1, 0]));
// console.log(solution.multiply([1, 1], 3));
// console.log(solution.length([3, -4]));
// console.log(solution.dot([2, 3], [2, -1]));
console.log(solution.cross([1, 1], [-1, 1]));