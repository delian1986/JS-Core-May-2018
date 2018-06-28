function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}


let expect=require('chai').expect;

describe ('should return symmetric',function () {
    it('should return symmetric for [1,2,3,2,1]', function () {
         let expectingVal=true;
         let actualReturn=isSymmetric([1,2,3,2,1]);
         expect(expectingVal).to.be.equal(actualReturn);
    });
    it('should return symmetric for [1,{},[],{},1]', function () {
         let expectingVal=true;
         let actualReturn=isSymmetric([1,{},[],{},1]);
         expect(expectingVal).to.be.equal(actualReturn);
    });
    it('should return symmetric for [5,hi,{a:5},new Date(),{a:5},hi,5] ]', function () {
         let expectingVal=true;
         let actualReturn=isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5]);
         expect(expectingVal).to.be.equal(actualReturn);
    });
})
describe ('should NOT return symmetric',function () {
    it('should not return symmetric for [0,2,3,2,1]', function () {
         let expectingVal=false;
         let actualReturn=isSymmetric([0,2,3,2,1]);
         expect(expectingVal).to.be.equal(actualReturn);
    });
    it('should not return symmetric for [pesho,{},[],{},1]', function () {
         let expectingVal=false;
         let actualReturn=isSymmetric(['pesho',{},[],{},1]);
         expect(expectingVal).to.be.equal(actualReturn);
    });
    it('should not return symmetric for string', function () {
         let expectingVal=false;
         let actualReturn=isSymmetric('pesho');
         expect(expectingVal).to.be.equal(actualReturn);
    });
})