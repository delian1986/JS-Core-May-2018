function orderRectangles (input) {
    let result=[];

    for (let arr of input) {
        let currWidth=arr[0];
        let currHeight=arr[1];

        let rectangle={};
        rectangle.width=currWidth;
        rectangle.height=currHeight;
        rectangle.area=function(){
          return Number(rectangle.width)*Number(rectangle.height)
        };
        rectangle.compareTo=function(other){
            let result= other.area()-rectangle.area();
            return result || (other.width - rectangle.width )
        };
        result.push(rectangle)
        result.sort((a,b)=>a.compareTo(b));
    }



    return result;


}

orderRectangles([[10,5],[5,12]]);
orderRectangles([[10,5], [3,20], [5,12]]);