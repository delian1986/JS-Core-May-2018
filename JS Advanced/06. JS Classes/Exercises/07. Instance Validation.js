class Validation {
    constructor(clientId, email, firstName, lastName) {
       this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if (!/^\d{6}$/.test(value)){
            throw TypeError('Client ID must be a 6-digit number');
        }
        this._clientId=value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if (!/^[\dA-Za-z]+@[A-Za-z.]+$/.test(value)){
            throw TypeError('Invalid e-mail');
        }
        this._email=value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (value.length<3||value.length>20){
            throw TypeError('First name must be between 3 and 20 characters long');
        }
        if (!/^[A-Za-z]{3,20}$/.test(value)){
            throw TypeError('First name must contain only Latin characters');
        }
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (value.length<3||value.length>20){
            throw TypeError('Last name must be between 3 and 20 characters long');
        }
        if (!/^[A-Za-z]{3,20}$/.test(value)){
            throw TypeError('Last name must contain only Latin characters');
        }
        this._lastName = value;
    }
}


let acc = new Validation('131455', 'ivan@', 'Ivan', 'Petrov')