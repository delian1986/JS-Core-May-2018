//80/100

let SubscriptionCard=require('../02. Subscription Card 1');
let expect=require('chai').expect;

describe('subsCardRetest',function () {
    describe('initialize',function () {
        it('should be initialize correct', function () {
            let card=new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.firstName).to.equal('Pesho');
            expect(card.lastName).to.equal('Petrov');
            expect(card.SSN).to.equal('00000000');
            expect(card.isBlocked).to.equal(false);
            expect(card.isValid()).to.equal(false);
            expect(card.hasOwnProperty('addSubscription')).to.equal(false);
            expect(card.hasOwnProperty('block')).to.equal(false);
            expect(card.hasOwnProperty('unblock')).to.equal(false);
        });
    });
    describe('firstName',function () {
        it('should be initialized with number', function () {
            let card=new SubscriptionCard(12, 'Petrov', '00000000');
            expect(card.firstName).to.equal(12);
            card.firstName='Ivan';
            expect(card.firstName).to.equal(12);
        });
    });
    describe('isBlocked',function () {
        it('should be blocked and unblocked after', function () {
            let card=new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            expect(card.isBlocked).to.equal(true);
            card.unblock();
            expect(card.isBlocked).to.equal(false);
        });
    });
    describe('addSubscription',function () {
        it('adding one subs', function () {
            let card=new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.equal(true);
            expect(card.isValid('120', new Date('2018-04-21'))).to.equal(false);
            expect(card.isValid('120', new Date('2018-05-21'))).to.equal(true);
            expect(card.isValid('120', new Date('2018-05-22'))).to.equal(false);
            expect(card.isValid('121', new Date('2018-05-21'))).to.equal(false);
        });
        it('adding subs for all lines', function () {
            let card=new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription();
            expect(card.isValid('M1', new Date('2018-05-21'))).to.equal(false);
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.equal(true);
            expect(card.isValid('taxi', new Date('2018-04-21'))).to.equal(false);
            expect(card.isValid('M1', new Date('2018-05-21'))).to.equal(true);
            expect(card.isValid('1', new Date('2018-05-22'))).to.equal(false);
            expect(card.isValid('121', new Date('2018-05-21'))).to.equal(true);
            //blocking the card and checking with valid subs
            card.block();
            expect(card.isValid('121', new Date('2018-05-21'))).to.equal(false);
        });
        it('adding invalid subs', function () {
            let card=new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription(12, new Date('01-555-99'), new Date('22--11-2222'));
            expect (card.isValid(23,new Date('2018-05-21'))).to.equal(false)
        });
    })
});