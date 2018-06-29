class Rectangle {
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    calcArea() {
        return this.width*this.height
    }
}

let rect1=new Rectangle(20,30,'yellow');
console.log(rect1.height);
console.log(rect1.calcArea());