(function strExtend() {
    String.prototype.ensureStart = function (string) {
        if (!this.toString().startsWith(string)) {
            return string + this.toString();
        }
        return this.toString()
    };

    String.prototype.ensureEnd = function (string) {
        if (!this.toString().endsWith(string)) {
            return this.toString() + `${string}`;
        }
        return this.toString()
    };

    String.prototype.isEmpty = function () {
        if (this.toString() === '') {
            return true;
        } else {
            return false
        }

    };

    String.prototype.truncate = function (num) {
        if (num<=3){
            return '.'.repeat(num);
        }
        if (this.toString().length <= num) {
            return this.toString();
        } else {
            let lastIndex= this.toString().substr(0,num-2).lastIndexOf(' ');
            if (lastIndex!==-1){
                return this.toString().substring(0, lastIndex) + '...';
            }else{
                return this.toString().substr(0,num-3)+'...'
            }
        }
    }

    String.format=function (string,...params) {
        let ptrn=/{[0-9]}/;

        for (let i = 0; i < params.length; i++) {
            string=string.replace(ptrn,params[i]);
        }
        return string
    }


})()

// let str = 'my string';
// str = str.ensureStart('my ');
// str = str.ensureStart('hello ');
// console.log(str);
//
// str = str.ensureEnd('string');
// console.log(str);
// str = str.ensureEnd('moo ');
// console.log(str);
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// console.log(str);
// str = String.format('jumps {0} {1}',
//     'dog');
// console.log(str);


let testString = 'the quick brown fox jumps over the lazy dog'
testString=testString.truncate(10);
console.log(testString);
