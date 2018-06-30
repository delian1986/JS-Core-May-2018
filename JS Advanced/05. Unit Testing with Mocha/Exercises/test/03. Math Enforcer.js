let expect=require('chai').expect;
let mathEnforcer=require('../04. Math Enforcer').mathEnforcer;


describe('mathEnforcer', function () {
    describe('addFive', function () {
        it("should return undefined for non-number parameter",function () {
            expect(mathEnforcer.addFive("5")).to.be.equal(undefined);
        });
        it("should return correct result for positive integer parameter", function () {
            expect(mathEnforcer.addFive(10)).to.be.equal(15);
        });
        it("should return correct result for negative integer parameter", function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it("should return correct result for floating point parameter", function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    });
    describe('subtractTen', function () {
        it("should return undefined for non-number parameter",function () {
            expect(mathEnforcer.subtractTen("5")).to.be.equal(undefined);
        });
        it("should return correct result for positive integer parameter", function () {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it("should return correct result for negative integer parameter", function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it("should return correct result for floating point parameter", function () {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
        });
    });
    describe('sum', function () {
        it('should return correct for positive integer', function () {
            expect(mathEnforcer.sum(4,4)).to.be.equal(8);
        });
        it('should return correct for negative integer', function () {
            expect(mathEnforcer.sum(-10,-5)).to.be.equal(-15);
        });
        it('should return correct for positive and negative num', function () {
            expect(mathEnforcer.sum(-10,5)).to.be.equal(-5);
        });
        it('should return correct for input negative floating numbers', function () {
            expect(mathEnforcer.sum(-3.14,-3.5555)).to.be.closeTo(-6.69,0.01);
        });
        it('should return correct for input positive floating numbers', function () {
            expect(mathEnforcer.sum(3.14,3.5555)).to.be.closeTo(6.69,0.01);
        });
        it('should return undefined for input no number for first argument', function () {
            expect(mathEnforcer.sum('pesho',4)).to.be.equal(undefined);
        });
        it('should return undefined for input no number as second argument', function () {
            expect(mathEnforcer.sum(4,'stamat')).to.be.equal(undefined);
        });
    })
});