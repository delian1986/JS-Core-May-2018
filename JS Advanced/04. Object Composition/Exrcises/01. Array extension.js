(function arrExtension(){
    Array.prototype.last=function () {
        return this[this.length-1];
    };
    Array.prototype.skip=function (n) {
        return this.slice(n);
    };
    Array.prototype.sum=function () {
        return this.reduce((a,b)=>a+b);
    }

    Array.prototype.average=function () {
        return this.sum()/this.length;
    }
    Array.prototype.take=function (n) {
        let newArray=[];
        return newArray=this.slice(0,n);
    }

})()

