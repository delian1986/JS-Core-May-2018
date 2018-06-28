let expect=require("chai").expect;
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}



describe('sum(arr)- sum of arr nums',function () {
    it('should return 3 for [1,2]',function () {
        let actuialSum=sum([1,2]);
        let expectSum=3;
        expect (actuialSum).to.be.equal(expectSum);
    })
    it('should return first element for [1]',function () {
        let oneElement=sum([1]);
        let expectReturn=1;
        expect (oneElement).to.be.equal(expectReturn);
    })
    it('should return 0 for empty',function () {
        let emptyArray=sum([]);
        let expectReturn=0;
        expect (emptyArray).to.be.equal(expectReturn);
    })
});