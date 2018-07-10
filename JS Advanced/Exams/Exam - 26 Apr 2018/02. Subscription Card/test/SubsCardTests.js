//80/100

let SubscriptionCard=require('../02. Subscription Card');
let expect=require('chai').expect;


describe('SubsCard',function () {
    describe('instantiated',function () {
        it('should initialize correctly', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.firstName).to.equal('Pesho');
            expect(card.lastName).to.equal('Petrov');
            expect(card.SSN).to.equal('00000000');
        });
        it('should initialize correctly with empty params', function () {
            const card = new SubscriptionCard('', '', '');
            expect(card.firstName).to.equal('');
            expect(card.lastName).to.equal('');
            expect(card.SSN).to.equal('');
        });
        it('after initialize props should not be able to change', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.firstName='newName';
            card.lastName='newName';
            card.SSN='newSSN';
            expect(card.firstName).to.equal('Pesho');
            expect(card.lastName).to.equal('Petrov');
            expect(card.SSN).to.equal('00000000');
        });

    });
    describe('isBlocked accessor',function () {
        it('should be false at initialize', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isBlocked).to.equal (false);
            card.isBlocked=true;
            expect(card.isBlocked).to.equal (false);
        });

    });
    describe('addSubscription function',function () {
        it('should add subs correctly', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.equal(true)

        });
        it('should return false on incorrect params', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('10', new Date('2018-04-22'))).to.equal(false)
            expect(card.isValid('120', new Date('2017-04-22'))).to.equal(false)
            expect(card.isValid('120', new Date('2019-04-22'))).to.equal(false)
            expect(card.isValid()).to.equal(false)
        });
        it('should return correct statements on asterix symbol', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));

            expect(card.isValid('10', new Date('2018-04-22'))).to.equal(false);
            expect(card.isValid('120', new Date('2017-04-22'))).to.equal(false);
            expect(card.isValid('120', new Date('2019-04-22'))).to.equal(false);
            expect(card.isValid('10', new Date('2018-05-28'))).to.equal(true);
            expect(card.isValid()).to.equal(false);
        });
    });
    describe('block function',function () {
        it('should return undefined on initialization', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.block()).to.equal(undefined);
        });
        it('should return true on block', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            expect(card.isBlocked).to.equal(true);
        });
        it('should return false on unblock', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block();
            card.unblock();
            expect(card.isBlocked).to.equal(false);
        });
    })

});
