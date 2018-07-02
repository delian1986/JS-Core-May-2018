class List {
    constructor(){
        this.list=[];
        this.size=0;
    }

    add(element){
        this.size++;
        this.list.push(element);
        this.sort(this.list)
    }

    remove(index){
        if (index>=0&&index<this.list.length){
            this.size--;
            this.list.splice(index,1);
            this.sort(this.list)
        }
    }

    get(index){
        if (index>=0&&index<this.list.length) {
            return this.list[index];
        }
    }

    sort(list){

        return list.sort((a,b)=>a-b);
    }
}

let list=new List();
list.add(2);
list.add(1);
list.add(3);
console.log(list);
list.remove(1)
list.remove(1)
list.remove(0)
list.remove(0)
console.log(list);
