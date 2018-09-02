//90-100

function mobaChallenger(input) {
    let playerBase = {};

    for (let line of input) {
        if (line === 'Season end') {
            break;
        }
        //adding players
        if (line.includes(' -> ')) {
            let args = line.split(' -> ');
            let player = args[0];
            let skill = args[1];
            let score = Number(args[2]);

            if (!playerBase.hasOwnProperty(player)) {
                playerBase[player] = {};
                playerBase[player][skill] = skill;
                playerBase[player][skill] = score;
            } else {
                if (!playerBase[player].hasOwnProperty(skill)) {
                    playerBase[player][skill] = skill;
                    playerBase[player][skill] = score;
                } else {
                    if (playerBase[player][skill] < score) {
                        playerBase[player][skill] = score;
                    }
                }
            }
        } else {
            //pvp
            let args = line.split(' vs ');
            let player1 = args[0];
            let player2 = args[1];

            if (playerBase.hasOwnProperty(player1) && playerBase.hasOwnProperty(player2)) {
                let player1Skills = Object.keys(playerBase[player1]);
                let player2Skills = Object.keys(playerBase[player2]);

                for (const skill of player2Skills) {
                    if (player1Skills.includes(skill)) {
                        let player1Score = playerBase[player1][skill];
                        let player2Score = playerBase[player2][skill];
                        if (player2Score > player1Score) {
                            delete(playerBase[player1]);
                        } else if (player1Score > player2Score) {
                            delete(playerBase[player2]);
                        }
                    }
                }
            }
        }
    }
    //adding all players with their scores
    let playerScore = {};
    for (let player in playerBase) {
        let score = Object.values(playerBase[player]).reduce((a,b)=>a+b);
        playerScore[player]=score;
    }

    //order by score
    let orderedPlayersByScore=Object.keys(playerScore).sort(function (a,b) {
        if (playerScore[b]-playerScore[a]!==0){
            return playerScore[b]-playerScore[a];
        }
        else{
            return a.localeCompare(b)
        }
    });

    //print results
    for (let player of orderedPlayersByScore) {
        console.log(`${player}: ${playerScore[player]} skill`);
        let orderedSkills=Object.keys(playerBase[player]).sort(function (a,b) {
            if (playerBase[player][b]-playerBase[player][a]!==0){
                return playerBase[player][b]-playerBase[player][a]
            } else{
                return a.localeCompare(b)
            }
        });

        for (let skill of orderedSkills) {
            console.log(`- ${skill} <::> ${playerBase[player][skill]}`);
        }
    }
}

// mobaChallenger(['Pesho -> Adc -> 400',
//     'Gosho -> Jungle -> 300',
//     'Stamat -> Mid -> 200',
//     'Stamat -> Support -> 250',
//     'Season end']);
//

mobaChallenger(['Pesho -> Adc -> 400',
    'Bush -> Tank -> 150',
    'Faker -> Mid -> 200',
    'Faker -> Support -> 250',
    'Faker -> Tank -> 250',
    'Pesho vs Faker',
    'Faker vs Bush',
    'Faker vs Hide',
    'Season end'])