function classHierarchy() {
    class Figure{
        constructor(){
            if (new.target === Figure)
                throw new Error("Cannot instantiate an abstract class.");
        }

        toString(){
            return `${this.constructor.name}`;

        }
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius=Number(radius);
        }
        get area(){
            return Math.PI*Math.pow(this.radius,2);
        }

        toString(){
            return `${super.toString()} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor(width,height){
            super();
            this.width=width;
            this.height=height;
        }
        get area(){
            return this.width*this.height;
        }
        toString(){
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return{
        Figure,
        Circle,
        Rectangle
    }
}


let fig=classHierarchy();
let c1=new fig.Circle(2);
let rect1=new fig.Rectangle(3,4);
console.log(rect1.area);
console.log(rect1.toString());
console.log(c1.area);
console.log(c1.toString());