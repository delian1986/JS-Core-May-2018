//50/100

let expect=require('chai').expect;

let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();

describe('',function () {
    // let testList;
    // beforeEach(function(){
    //     testList=list();
    // });

    it('should add items correctly', function () {
        list.add(2);
        list.add('peter');
        list.add({});
        expect(list.toString()).to.equal('2, peter, [object Object]');
    });
    it('should delete properly', function () {
        list.delete(2);
        expect(list.delete('peter')).to.be.undefined;
        expect(list.delete(-1)).to.be.undefined;
        expect(list.delete(11)).to.be.undefined;
        expect(list.toString()).to.equal('2, peter');
    });
});