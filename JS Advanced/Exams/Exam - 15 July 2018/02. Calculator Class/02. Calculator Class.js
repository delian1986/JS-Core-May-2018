let expect = require('chai').expect;

class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide === undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}

//90/100
let calc;
beforeEach(function () {
    calc = new Calculator();
});
describe('', function () {
    it('empty', function () {
        expect(calc.toString()).to.equal('empty array')
    });
    it('add', function () {
        calc.add(2);
        calc.add(4);
        calc.add('pesho');
        calc.add({});
        expect(calc.toString()).to.equal('2 -> 4 -> pesho -> [object Object]')
    });
    it('divide', function () {
        calc.add(2);
        calc.add(4);
        calc.add('pesho');
        calc.add({});
        expect(calc.divideNums()).to.equal(0.5)
    });
    it('divide empty', function () {
        expect(calc.toString()).to.equal('empty array')
    });
    it('divide by one num', function () {
        calc.add(2);
        expect(calc.divideNums()).to.equal(2)
    });
    it('divide by zero', function () {
        calc.add(2);
        calc.add(0);
        expect(calc.divideNums()).to.equal("Cannot divide by zero")
    });
    it('divide by negative', function () {
        calc.add(2);
        calc.add(-11);
        expect(calc.divideNums()).to.equal(-0.18181818181818182)
    });
    it('divide only negative', function () {
        calc.add(-12);
        calc.add(-11);
        expect(calc.divideNums()).to.equal(1.0909090909090908)
    });
    it('divide floats', function () {
        calc.add(-12.1);
        calc.add(-11.22);
        expect(calc.divideNums()).to.equal(1.0784313725490196)
    });
    it('divide more than two', function () {
        calc.add(-12);
        calc.add(12);
        calc.add(-11);
        expect(calc.divideNums()).to.equal(0.09090909090909091)
    });
    it('divide with no nums', function () {
        calc.add('wdas');
        calc.add({});
        calc.add('sda');
        expect(() => calc.divideNums().to.throw('There are no numbers in the array!'))
    });
    it('orderby nums', function () {
        calc.add(12);
        calc.add(4);
        expect(calc.orderBy()).to.equal("4, 12")
    });
    it('orderby mixed', function () {
        calc.add(12);
        calc.add(-4);
        calc.add(0);
        calc.add('pesh');
        calc.add({});
        expect(calc.orderBy()).to.equal("-4, 0, 12, [object Object], pesh")
    });
    it('orderby empty', function () {
        expect(calc.orderBy()).to.equal("empty")
    });
    it('orderby non nums', function () {
        calc.add('sad');
        calc.add({});
        calc.add('2');
        expect(calc.orderBy()).to.equal("2, [object Object], sad")
    });
    it('one elelemt arr', function () {
        calc.add(-1);
        expect(calc.toString()).to.equal('-1')
    });
});