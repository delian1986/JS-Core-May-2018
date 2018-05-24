function biggestOfThreeNumbers(arrOfNums) {
    let biggerOfFirstPair=Math.max(arrOfNums[0],arrOfNums[1]);
    let biggest=Math.max(arrOfNums[2],biggerOfFirstPair);
    console.log(biggest);
}

biggestOfThreeNumbers([1,3,4]);