class Stringer{
    constructor(innerString,innerLength){
        this.innerString=innerString;
        this.innerLength=Number(innerLength);
    }

    decrease(num){
        if (this.innerLength-Number(num)<0){
            return this.innerLength=0;
        }else{
            return this.innerLength=this.innerLength-Number(num)
        }
    }
    increase(num){
        return this.innerLength=this.innerLength+Number(num)
    }

    toString(){
        if (this.innerString.length<=this.innerLength){
            return this.innerString
        }else{
            return this.innerString.substring(0,this.innerLength)+'...';
        }
    }


}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
