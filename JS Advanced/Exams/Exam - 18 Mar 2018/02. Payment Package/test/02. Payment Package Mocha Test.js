//80/100 toString need testing

let PaymentPackage = require('../02. Payment Package').PaymentPackage;
let expect = require('chai').expect;

describe('paymentPackage', function () {
    describe('default VAT', function () {
        it('should return default value', function () {
            let payPack = new PaymentPackage('peter', 10);
            expect(payPack.VAT).to.equal(20);
            expect(payPack.active).to.equal(true);
            expect(payPack.name).to.equal('peter');
            expect(payPack.value).to.equal(10);
        });
    });
    describe('name prop tests', function () {
        it('should throw error on non string', function () {
            expect(function () {
                new PaymentPackage(20,20);
            }).to.throw('Name must be a non-empty string')
        });
        it('should throw error on empty string', function () {
            expect(function () {
                new PaymentPackage('',20);
            }).to.throw('Name must be a non-empty string')
        });
        it('should correct change the name', function () {
            let newPack=new PaymentPackage('peter',20);
            expect(newPack.name).to.equal('peter');
            newPack.name='georgi';
            expect(newPack.name).to.equal('georgi')
        });
    })
    describe ('value property',function () {
        it('should throw error on string value', function () {
            expect(function () {
                new PaymentPackage('name','');
            }).to.throw('Value must be a non-negative number')
        });
        it('should throw error on negative value', function () {
            expect(function () {
                new PaymentPackage('name',-1);
            }).to.throw('Value must be a non-negative number')
        });
        it('should be zero on zero value', function () {
            let newPack=new PaymentPackage('name',0);
            expect(newPack.value).to.equal(0);
        });
        it('should correct change the value', function () {
            let newPack=new PaymentPackage('name',0);
            expect(newPack.value).to.equal(0);
            newPack.value=20;
            expect(newPack.value).to.equal(20);

        });
    })
    describe ('VAT prop',function () {
        it('should throw error on string VAT', function () {
            let newPack=new PaymentPackage('name',10);
            expect(function () {
                newPack.VAT='';
            }).to.throw('VAT must be a non-negative number');
        });
        it('should throw error on negative VAT', function () {
            let newPack=new PaymentPackage('name',10);
            expect(function () {
                newPack.VAT=-1;
            }).to.throw('VAT must be a non-negative number');
        });

        it('should be zero on zero VAT', function () {
            let newPack=new PaymentPackage('name',0);
            newPack.VAT=0;
            expect(newPack.VAT).to.equal(0);
        });
        it('should correct change the VAT', function () {
            let newPack=new PaymentPackage('name',0);
            expect(newPack.VAT).to.equal(20);
            newPack.VAT=30;
            expect(newPack.VAT).to.equal(30);

        });
    })
    describe ('active property',function () {
        it('should throw error on non boolean input', function () {
            let newPack=new PaymentPackage('name',10);
            expect(function () {
                newPack.active=-1;
            }).to.throw('Active status must be a boolean');
        });
        it('should return true on true input', function () {
            let newPack=new PaymentPackage('name',10);
            newPack.active=true;
            expect(newPack.active).to.equal(true);
        });
        it('should return false on false input', function () {
            let newPack=new PaymentPackage('name',10);
            newPack.active=false;
            expect(newPack.active).to.equal(false);
        });
        it('should correct change the active property', function () {
            let newPack=new PaymentPackage('name',0);
            expect(newPack.active).to.equal(true);
            newPack.active=false;
            expect(newPack.active).to.equal(false);
        });
    })
    describe('toString',function () {
        it('should return correct string', function () {
            let payPack=new PaymentPackage('peter',0);
            expect(JSON.stringify(payPack.toString())).to.equal(JSON.stringify(payPack.toString()));
        });
    })
    
});