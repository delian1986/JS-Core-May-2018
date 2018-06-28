function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let expect=require('chai').expect;

describe('should return valid color',function () {
    it('should return #FF0000 for 255, 0, 0', function () {
        let expectValue='#FF0000';
        let actualReturn=rgbToHexColor(255,0,0);
        expect(expectValue).to.be.equal(actualReturn)
    });
    it('should return #00FF00 for 0, 255, 0', function () {
        let expectValue='#00FF00';
        let actualReturn=rgbToHexColor(0,255,0);
        expect(expectValue).to.be.equal(actualReturn)
    });
    it('should return #0000FF for 0, 0, 255', function () {
        let expectValue='#0000FF';
        let actualReturn=rgbToHexColor(0,0,255);
        expect(expectValue).to.be.equal(actualReturn)
    });
})
describe('should return undefined for invalid input',function () {
    it('should return undefined for pesho, 0, 0', function () {
        let expectValue=undefined;
        let actualReturn=rgbToHexColor('pesho',0,0);
        expect(expectValue).to.be.equal(actualReturn)
    });
    it('should return undefined for 0, pesho, 0', function () {
        let expectValue=undefined;
        let actualReturn=rgbToHexColor(0,'pesho',0);
        expect(expectValue).to.be.equal(actualReturn)
    });
    it('should return undefined for 0, 0, pesho', function () {
        let expectValue=undefined;
        let actualReturn=rgbToHexColor(0,0,'pesho');
        expect(expectValue).to.be.equal(actualReturn)
    });
})
describe('should return undefined for negative number',function () {
    it('should return undefined for -100, 0, 0', function () {
        let expectValue=undefined;
        let actualReturn=rgbToHexColor(-100,0,0);
        expect(expectValue).to.be.equal(actualReturn)
    });
    it('should return undefined for 0,-100, 0', function () {
        let expectValue=undefined;
        let actualReturn=rgbToHexColor(0,-100,0);
        expect(expectValue).to.be.equal(actualReturn)
    });
    it('should return undefined for 0, 0, -100', function () {
        let expectValue=undefined;
        let actualReturn=rgbToHexColor(0,0,-100);
        expect(expectValue).to.be.equal(actualReturn)
    });
})
describe('should return undefined for too big number',function () {
    it('should return undefined for 300, 0, 0', function () {
        let expectValue=undefined;
        let actualReturn=rgbToHexColor(300,0,0);
        expect(expectValue).to.be.equal(actualReturn)
    });
    it('should return undefined for 0,300, 0', function () {
        let expectValue=undefined;
        let actualReturn=rgbToHexColor(0,300,0);
        expect(expectValue).to.be.equal(actualReturn)
    });
    it('should return undefined for 0, 0, 300', function () {
        let expectValue=undefined;
        let actualReturn=rgbToHexColor(0,0,300);
        expect(expectValue).to.be.equal(actualReturn)
    });
})