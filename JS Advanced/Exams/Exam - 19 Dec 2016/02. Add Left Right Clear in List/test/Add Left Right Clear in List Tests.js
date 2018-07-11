let makeList = require('../AddLeftRightClearInList');
let expect = require('chai').expect;

describe("smthng", function () {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });
    it('should contains all properties', function () {
        expect(typeof myList.toString).to.equal('function');
        expect(myList.addLeft).to.exist;
        expect(myList.addRight).to.exist;
        expect(myList.clear).to.exist;

    });
    it('should add elements correctly', function () {
        myList.addRight(2);
        myList.addRight('1');
        myList.addRight({key: 'value'});
        expect(myList.toString()).to.equal('2, 1, [object Object]');
    });
    it('should swap correctly', function () {
        myList.addRight(2);
        myList.addLeft('1');
        myList.addRight({key: 'value'});
        expect(myList.toString()).to.equal('1, 2, [object Object]');
    });
    it('list should initialize empty', function () {
        expect(myList.toString()).to.equal('');
    });
    it('should clear correctly', function () {
        myList.addRight(2);
        myList.addLeft('1');
        myList.addRight({key: 'value'});
        myList.clear();
        expect(myList.toString()).to.equal('');
    });
});





