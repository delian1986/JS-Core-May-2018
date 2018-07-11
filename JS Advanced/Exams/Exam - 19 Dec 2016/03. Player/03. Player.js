class Player {
    constructor(name) {
        this.nickName = name;
        this.scores = [];
    }

    addScore(score) {
        if (!(isNaN(score))&&score!==null) {
            this.scores.push(Number(score));
            return this
        }
    }

    get scoreCount(){
        return this.scores.length;
    }

    get highestScore(){
        let highest=this.scores.sort((a,b)=>b-a);
        return highest[0];
    }

    get topFiveScore(){
        return this.scores.sort((a,b)=>b-a).slice(0,5);
    }

    toString(){
       return `${this.nickName}: [${this.scores.sort((a,b)=>b-a)}]`;
    }
}

// let peter = new Player("Peter"); console.log('Highest score: ' + peter.highestScore); console.log(`Top 5 score: [${peter.topFiveScore}]`); console.log('' + peter); console.log('Score count: ' + peter.scoreCount); peter.addScore(450); peter.addScore(200); console.log('Highest score: ' + peter.highestScore); console.log(`Top 5 score: [${peter.topFiveScore}]`); console.log('' + peter); peter.addScore(2000); peter.addScore(300); peter.addScore(50); peter.addScore(700); peter.addScore(700);
// console.log('Highest score: ' + peter.highestScore);
// console.log(`Top 5 score: [${peter.topFiveScore}]`);
// console.log('' + peter);
// console.log('Score count: ' + peter.scoreCount);
// console.log();

// let maria = new Player("Maria")
//
// console.log('Highest score: ' + maria.highestScore);
// console.log(`Top 5 score: [${maria.topFiveScore}]`);
// console.log('' + maria);

 // let player = new Player('Misho');

// player.addScore(130);
// player.addScore(240);
// player.addScore(0);
// player.addScore('Pesho');
//
// console.log(player.scoreCount);
// console.log(player.toString());
// console.log(player.topFiveScore[1]);
// player.addScore(555);
// console.log(player.topFiveScore);

let player = new Player('Misho');
player.addScore('123');
player.addScore('Pesho')
console.log(player.toString());
console.log(player.highestScore);
console.log(player.scoreCount);
console.log(player.topFiveScore[0]);

