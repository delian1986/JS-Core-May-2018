function sortedList() {
    return {
        list: [],

        add: function (element) {
            this.list.push(element);
            this.size++;

            this.sortingList(this.list);
            // return this.list
        },
        remove: function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size--;
                this.sortingList(this.list);
            }
        },
        get:function(index){
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        },
        size:0,

        sortingList: function (list) {
            return list.sort((a, b) => a - b);
        },


    }
}

let sortList = sortedList();
sortList.add(2);
sortList.add(1);
sortList.add(3);
console.log(sortList.list.toString());
console.log(sortList.get(2));
console.log(sortList.list.toString());

sortList.remove(2);
console.log(sortList.list.toString());
console.log(sortList.size);

