//91/100

class PaymentProcessor {
    constructor(options) {
        this.options = options;
        this.payments = [];
    }
    
    get options(){
        return this._options;
    }
    
    set options(options){
        if (options===undefined){
            options={};
        } 
        
        if (this.options===undefined){
            this._options={};
        } 
        
        this.setOptions(options);
    }

    registerPayment(id, name, type, value) {
        if (id === '' || typeof id !== 'string') {
            throw new Error('id must be non-empty string')
        } else if (name === '' || typeof id !== 'string') {
            throw new Error('name must be non-empty string')
        } else if (!this.options.types.includes(type)) {
            throw new Error('type not supported')
        } else if (typeof value !== 'number') {
            throw new Error('value must be a number')
        } else if (this.payments.filter(e => e.id === id).length !== 0) {
            throw new Error('Id already exists')
        }

        return this.payments.push({id: id, name: name, type: type, value: value.toFixed(this.options.precision)})

    }

    setOptions(options){
        if (options['types']===undefined&&options['precision']===undefined){
            this._options['types']=['service', 'product', 'other'];
            this._options['precision']=2;
        }else if(options['types']===undefined&&options['precision']!==undefined){
            this._options['types']=['service', 'product', 'other'];
            this._options['precision']=options['precision'];
        }else if(options['types']!==undefined&&options['precision']===undefined){
            this._options['types']=options['types'];
            this._options['precision']=2;
        }else{
            this._options['types']=options['types'];
            this._options['precision']=options['precision'];
        }
    }

    

    deletePayment(id) {
        if (this.payments.filter(e => e.id !== id).length === 0) {
            throw new Error('Invalid Id')
        }
        this.payments = this.payments.filter(e => e.id !== id);
    }

    get(id) {
        let foundId = this.payments.filter(e => e.id === id);
        if (foundId.length===0){
            throw new Error('ID not found');
        }
        let result = '';
        result += `Details about payment ID: ${foundId[0].id}\n`;
        result += `- Name: ${foundId[0].name}\n`;
        result += `- Type: ${foundId[0].type}\n`;
        result +=  `- Value: ${foundId[0].value}`;
        return result;
    }

    toString() {
        let balance = 0;
        for (let order of this.payments) {
            balance += Number(order.value);
        }

        let result = '';
        result += 'Summary:\n';
        result += `- Payments: ${this.payments.length}\n`;
        result += `- Balance: ${balance.toFixed(this.options.precision)}`;

        return result;
    }
}

// const generalPayments = new PaymentProcessor();
// generalPayments.registerPayment('E027', 'Microchips', 'product', 15000);
// generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
// // console.log(generalPayments.toString());

// Should throw an error (invalid type)
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

// generalPayments.setOptions({types: ['product', 'material']});
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// console.log(generalPayments.get('E028'));
// generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// // Should throw an error (ID not found)
// console.log(generalPayments.toString());
// generalPayments.deletePayment('E027');
// // Should throw an error (ID not found)
// console.log(generalPayments.get('01v3'));
// console.log(generalPayments.toString());

// const servicePyaments = new PaymentProcessor({types: ['service']});
// servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
// servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
// console.log(servicePyaments.toString());
console.log();

const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());

