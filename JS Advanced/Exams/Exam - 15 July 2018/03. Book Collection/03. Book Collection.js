class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelf = [];
        this.shelfCapacity = shelfCapacity;
    }


    get room() {
        return this._room;
    }

    set room(value) {
        if (value === 'livingRoom' || value === 'bedRoom' || value === 'closet') {
            this._room = value;
        }
        else {
            throw new Error(`Cannot have book shelf in {room's name}`);
        }

    }

    get shelfCondition(){
        let empty=this.shelfCapacity-this.shelf.length;
        if (empty>=0){
            return empty;
        }
    }

    toString(){
        if (this.shelf.length===0){
            return 'It\'s an empty shelf'
        }else{
            let header=`"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            let books='';
            for (let book of this.shelf) {
                books+=`\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`
            }

            return header+books.trimRight();
        }
    }

    addBook(bookName, bookAuthor, genre){
        if (this.shelf.length<this.shelfCapacity){
            this.shelf.push({bookName,bookAuthor,genre})
        }
        else{
            this.shelf.splice(0,1);
            this.shelf.push({bookName,bookAuthor,genre})

        }
         this.shelf=this.shelf.sort((a,b)=>a.bookAuthor>b.bookAuthor);
        //this.shelf=this.shelf.sort(function(a,b) {return (a.bookAuthor > b.bookAuthor) ? 1 : ((b.bookAuthor > a.bookAuthor) ? -1 : 0);} );

        return this
    }
    throwAwayBook(bookName){
        for (let i = 0; i < this.shelf.length; i++) {
            if (this.shelf[i].bookName===bookName){
                this.shelf.splice(i,1)
            }
        }
    }

    showBooks(genre){
        let allGender=this.shelf.filter((a => a.genre===genre));
        let result=`Results for search "${genre}":\n`;
        let books='';
        for (let book of allGender) {
            books+=`\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`;
        }

        return result+books.trimRight();

    }

}

// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
//     .addBook("Introduction to Programming with C#", "Svetlin Nakov")
//     .addBook("Introduction to Programming with Java", "Svetlin Nakov")
//     .addBook("Programming for .NET Framework", "Svetlin Nakov");
// livingRoom.throwAwayBook('Introduction to Programming with Java');
// livingRoom.showBooks('prog');
// console.log(livingRoom.toString());


// let classInstance = new BookCollection('Programming', 'livingRoom', 5)
// classInstance.addBook("John Adams", "David McCullough", "history");
// classInstance.addBook("The Guns of August", "Cuentos para pensar", "history");
// classInstance.addBook("Atlas of Remote Islands", "Judith Schalansky");
// classInstance.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
// console.log(classInstance.showBooks("history"));

// let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
// bedRoom.addBook("John Adams", "David McCullough", "history");
// bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
// bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
// bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
// console.log("Shelf's capacity: " + bedRoom.shelfCondition);
// console.log(bedRoom.showBooks("history"));

