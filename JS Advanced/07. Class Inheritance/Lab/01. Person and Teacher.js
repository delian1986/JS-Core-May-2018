function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }
    }

    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject=subject;
        }
    }

    return{
        Person,
        Teacher
    }
}

let p=personAndTeacher();
let pesho=new p.Person('peter','pe@abv.bg');
let gosho=new p.Teacher('gosho','gt@abv.bg','sport');
console.log(pesho);
console.log(gosho);