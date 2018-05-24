function pointInRectangle(coordinates) {
let point={
    x:coordinates[0],
    y:coordinates[1]
    };

let rectangle={
    x1:coordinates[2],
    x2:coordinates[3],
    y1:coordinates[4],
    y2:coordinates[5],
};

let inside=false;

if (point.x >= rectangle.x1 && point.x <= rectangle.x2
&&point.y>=rectangle.y1&&point.y<=rectangle.y2){
    inside=true;

}
    if (inside==true){
        console.log('inside');
    } else{
        console.log('outside');
    }
}



pointInRectangle([8,-1,2,12,-3,3]);