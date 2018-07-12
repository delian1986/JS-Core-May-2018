//78/100

let createList=require('../addSwapList');
let expect=require('chai').expect;

describe('list tests',function () {
    let list={};
    beforeEach(()=>{
        list=createList();
    });
    describe('should have all functions uppon initialize',function () {
        it('should have all functions', function () {
            expect(list.hasOwnProperty('add')).to.equal(true)
            expect(list.hasOwnProperty('shiftLeft')).to.equal(true)
            expect(list.hasOwnProperty('shiftRight')).to.equal(true)
            expect(list.hasOwnProperty('swap')).to.equal(true)
            expect(list.hasOwnProperty('toString')).to.equal(true)
        });
        it('should initialize empty', function () {
            expect(list.toString()).to.equal('');
        });
    });
    describe('add function',function () {
        it('should add items correct', function () {
            list.add(1);
            list.add('2');
            list.add({key:'val'});
            expect(list.toString()).to.equal('1, 2, [object Object]')
        });
    });
    describe('shiftLeft function',function () {
        it('should shift items correct', function () {
            list.add(1);
            list.add(2);
            list.shiftLeft();
            expect(list.toString()).to.equal('2, 1')
        });
        it('should do nothing on empty list', function () {
            list.shiftLeft();
            expect(list.toString()).to.equal('')
        });
        it('should do nothing on list with one element', function () {
            list.add(1);
            list.shiftLeft();
            expect(list.toString()).to.equal('1')
        });
        it('should shift many elements correctly', function () {
            list.add(1);
            list.add('2');
            list.add({});
            list.shiftLeft();
            expect(list.toString()).to.equal('2, [object Object], 1')
        });
    });
    describe('shiftRight function',function () {
        it('should shift two items correct', function () {
            list.add(1);
            list.add(2);
            list.shiftRight();
            expect(list.toString()).to.equal('2, 1')
        });
        it('should do nothing on empty list', function () {
            list.shiftRight();
            expect(list.toString()).to.equal('')
        });
        it('should do nothing on list with one element', function () {
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.equal('1')
        });
        it('should shift many elements correctly', function () {
            list.add(1);
            list.add('2');
            list.add({});
            list.shiftRight();
            expect(list.toString()).to.equal('[object Object], 1, 2')
        });
    });
    describe('swap',function () {
        it('should swap two numbers correct', function () {
            list.add(1);
            list.add(2);
            list.swap(0,1);
            expect(list.toString()).to.equal('2, 1')
        });
        it('should return true on valid swap', function () {
            list.add(1);
            list.add(2);
            expect(list.swap(0,1)).to.equal(true)
        });
        it('should return true on valid swap', function () {
            list.add('peter');
            list.add(2);
            expect(list.swap(0,1)).to.equal(true)
        });
        it('should return true on valid swap', function () {
            list.add({});
            list.add(2);
            expect(list.swap(0,1)).to.equal(true)
        });
        it('should return false on invalid swap', function () {
            list.add(1);
            list.add(2);
            //first index
            expect(list.swap(-1,1)).to.equal(false);
            expect(list.swap(3,1)).to.equal(false);
            expect(list.swap('pesho',1)).to.equal(false);
            expect(list.swap({},1)).to.equal(false);
            expect(list.swap(1.1,1)).to.equal(false);
            //second index
            expect(list.swap(0,-1)).to.equal(false);
            expect(list.swap(0,3)).to.equal(false);
            expect(list.swap(0,'pesho')).to.equal(false);
            expect(list.swap(0,{})).to.equal(false);
            expect(list.swap(0,1.33)).to.equal(false);

        });
    })
});