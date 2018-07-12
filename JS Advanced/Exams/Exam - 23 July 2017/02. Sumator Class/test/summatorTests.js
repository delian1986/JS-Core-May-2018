let Summator = require('../02. Sumator Class');
let expect = require('chai').expect;


describe("Sumator class", function () {
    let sum;
    beforeEach(function () {
        sum = new Summator();
    });

    describe('tests',function () {
        it("Sumator should be empty at initialize", function () {
            expect(sum.toString()).to.equal('(empty)')
        });
        it("Sumator should add items correctly", function () {
            sum.add(2);
            sum.add('1');
            sum.add({key:'value'});
            expect(sum.toString()).to.equal('2, 1, [object Object]')
        });
        it("Sumator should sum only numbers", function () {
            sum.add(2);
            sum.add('1');
            sum.add({key:'value'});
            expect(sum.sumNums()).to.equal(2)
        });
        it("Sumator should return zero if no numbers are given", function () {
            sum.add('2');
            sum.add('1');
            sum.add({key:'value'});
            expect(sum.sumNums()).to.equal(0)
        });
        it("Sumator should return zero on empty list", function () {
            expect(sum.sumNums()).to.equal(0)
        });
        it("Sumator should sum negative numbers and zeros", function () {
            sum.add(-1);
            sum.add(-2);
            sum.add(0);
            expect(sum.sumNums()).to.equal(-3)
        });
        it("Sumator should sum decimal and negative numbers", function () {
            sum.add(-1.1);
            sum.add(-2.222);
            sum.add(0.0000);
            expect(sum.sumNums()).to.equal(-3.322)
        });
        it("Sumator should sum decimal and negative numbers", function () {
            sum.add(-1.1);
            sum.add(-2.222);
            sum.add(0.0000);
            expect(sum.sumNums()).to.equal(-3.322)
        });
    });
});
