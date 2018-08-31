function handsOfCards(input) {
    let handsOfCards = new Map();

    for (let line of input) {
        if (line === 'JOKER') {
            break;
        }
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');

        if (!handsOfCards.has(name)) {
            handsOfCards.set(name, new Set());
        }
        let hand = handsOfCards.get(name);
        cards.forEach((c) => {
            hand.add(c);
        });
        handsOfCards.set(name, hand);
    }

    handsOfCards = calculateScore();
    [...handsOfCards].forEach((p)=>{
        console.log(`${p[0]}: ${p[1]}`);
    });


    function calculateScore() {
        for (let player of [...handsOfCards]) {
            let name = player[0];
            let hand = [...player[1]];
            let total=0;

            for (let card of hand) {
                let power = '';
                let type = '';
                let score = 0;
                if (card[1] === '0') {
                    power = '10';
                    type = card[2];
                } else {
                    power = card[0];
                    type = card[1];
                }

                switch (power) {
                    case '2':
                        score += 2;
                        break;
                    case '3':
                        score += 3;
                        break;
                    case '4':
                        score += 4;
                        break;
                    case '5':
                        score += 5;
                        break;
                    case '6':
                        score += 6;
                        break;
                    case '7':
                        score += 7;
                        break;
                    case '8':
                        score += 8;
                        break;
                    case '9':
                        score += 9;
                        break;
                    case '10':
                        score += 10;
                        break;
                    case 'J':
                        score += 11;
                        break;
                    case 'Q':
                        score += 12;
                        break;
                    case 'K':
                        score += 13;
                        break;
                    case 'A':
                        score += 14;
                        break;
                }

                //S -> 4, H-> 3, D -> 2, C -> 1).
                switch (type) {
                    case 'S':
                        score*=4;
                        break;
                    case 'H':
                        score*=3;
                        break;
                    case 'D':
                        score*=2;
                        break;
                    case 'C':
                        score*=1;
                        break;
                }
                total+=score;

            }
            handsOfCards.set(name,total)
        }

        return handsOfCards;
    }
}

handsOfCards(['Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD',
    'JOKER',
]);