function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

// console.log(lookupChar('peter', 2));

let expect=require('chai').expect;

describe('testing lookupChar',function () {
    describe('testing correct functionality',function () {
        it('should return t for peter and 2', function () {
            expect(lookupChar('peter',2)).to.be.equal('t')
        });
        it('should return Incorrect for peter and invalid index', function () {
            expect(lookupChar('peter',22)).to.be.equal('Incorrect index');
            expect(lookupChar('peter',-2)).to.be.equal('Incorrect index');
        });
        it('should return undefined for incorrect input', function () {
            expect(lookupChar([1,1],22)).to.be.equal(undefined);
            expect(lookupChar('peter',2.2)).to.be.equal(undefined);
        });
    })
})