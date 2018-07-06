function elemelons() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.element='';
            this.weight=Number(weight);
            this.melonSort=melonSort;
            this._elementIndex=this.weight*this.melonSort.length;
        }


        get elementIndex(){
            return this._elementIndex;
        }

        toString(){
            let resultString='';
            resultString+=`Element: ${this.element}\n`;
            resultString+=`Sort: ${this.melonSort}\n`;
            resultString+=`Element Index: ${this.elementIndex}`;

            return resultString;
        }

    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element='Water';
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element='Fire';

        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element='Earth';

        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element='Air';

        }

    }

    class Melolemonmelon extends Airmelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this._elements=['Fire', 'Earth', 'Air','Water'];
            this.element='Water';
            this.eIndex=0;
        }

        morph(){
            this.element=this._elements[this.eIndex++%4];
        }
    }
    return{
        Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon
    }
}

let test=elemelons();
// test = new test.Melon(100, "Test");

// let watermelon = new test.Watermelon(12.5, "Kingsize");
// console.log(watermelon.toString());

// let melo = new test.Melolemonmelon(12.5, "Kingsize");
// console.log(melo.toString());
// melo.morph()
// console.log(melo.toString());
// melo.morph()
// console.log(melo.toString());
// melo.morph()
// console.log(melo.toString());

test.Earthmelon
