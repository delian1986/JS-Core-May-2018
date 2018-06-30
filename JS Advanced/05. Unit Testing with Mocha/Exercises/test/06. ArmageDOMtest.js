let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let nuke = require('../06. ArmageDOM').nuke;

describe('armageDom', function () {
    beforeEach(function () {
        document.body.innerHTML =
            `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`
    });
    before(() => global.$ = $);
    it('should do nothing if selectors are equal', function () {
        let beforeNuke=$('body').html();
        nuke('#target','#target');
        let afterNuke=$('body').html();
        expect(beforeNuke).to.equal(afterNuke);
    });
    
    it("should remove two divs for ('div', '.target')", function () {
        let initialTargetLength = $('.target').length;
        let initialDivLength = $('div').length;
        let initialDivTargetLength = $('.target').filter('div').length;
        nuke('div', '.target');
        expect($('.target').filter('div').length).to.be.equal(0);
        expect($('div').length).to.equal(initialDivLength - initialDivTargetLength);
        expect($('.target').length).to.equal(initialTargetLength - initialDivTargetLength);
    });
    it("should remove one span for ('.nested','span')", function () {
        nuke('.nested','span');
        expect ($('span.nested').length).to.equal(0);
    });
    it('should return same html if one parameter in omitted', function () {
        let beforeNuke=$('body').html();
        nuke(".target");
        let afterNuke=$('body').html();
        expect (beforeNuke).to.equal(afterNuke);
    });
    it('should return same html if one parameter in omitted', function () {
        let beforeNuke=$('body').html();
        nuke("",".target");
        let afterNuke=$('body').html();
        expect (beforeNuke).to.equal(afterNuke);
    });
    it('should do nothing with non existing selector', function () {
        let beforeNuke=$('body').html();
        nuke("#invalid",'div')
        let afterNuke=$('body').html();
        expect (beforeNuke).to.equal(afterNuke);

    });
});



