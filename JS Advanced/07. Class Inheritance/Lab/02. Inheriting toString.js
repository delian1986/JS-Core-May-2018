function inheritingToString () {
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject=subject;
        }
        toString(){
            let baseStr = super.toString().slice(0, -1);
            return baseStr+`, subject: ${this.subject}`+')';
        }
    }

    class Student extends Person{
        constructor(name,email,course){
            super(name,email);
            this.course=course;
        }

        toString(){
            let baseStr = super.toString().slice(0, -1);
            return baseStr+`, course: ${this.course}`+')';

        }
    }

    return{
        Person,
        Teacher,
        Student
    }
}

let p=inheritingToString();
let pesho=new p.Person('peter','pe@abv.bg');
let gosho=new p.Teacher('gosho','gt@abv.bg','sport');
let lili=new p.Student('lili','lil@abv.bg','JS Core');
console.log(Object.getPrototypeOf(p.Teacher));
console.log(Object.getPrototypeOf(p.Person));

console.log(pesho.toString());
console.log(gosho.toString());
console.log(lili.toString());