class Person {
    constructor(firstName,lastName,age,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let p1=new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(p1.toString());