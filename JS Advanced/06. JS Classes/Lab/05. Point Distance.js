class Point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    static distance(a,b){
        let dx=a.x-b.x;
        let dy=a.y-b.y;

        return Math.hypot(dx,dy);
    }

}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));