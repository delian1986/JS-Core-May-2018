let expect=require('chai').expect;
let oddOrEven=require('../02. Even Or Odd').isOddOrEven;

describe('isOddOrEven',function () {
    describe('checking the correct functionality',function () {
        it('should return even with input ZERO', function () {
            expect(oddOrEven('zero')).to.be.equal('even')
        });
        it('should return odd with input PESHO', function () {
            expect(oddOrEven('pesho')).to.be.equal('odd')
        });
        it('should return undefined with non string input 22', function () {
            expect(oddOrEven(22)).to.be.equal(undefined)
        });
        it('should return correct values with multiple inputs ', function () {
            expect(oddOrEven('podIgoto')).to.be.equal('even')
            expect(oddOrEven('hadjiDimitur')).to.be.equal('even')
            expect(oddOrEven('doChicagoInazad')).to.be.equal('odd')
            expect(oddOrEven(2018)).to.be.equal(undefined)
        });
    })
})