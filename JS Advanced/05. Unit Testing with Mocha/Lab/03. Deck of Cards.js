function printDeckOfCards(arrayOfCards) {
    let deck = new Set();
    let valid = true;
    for (let card of arrayOfCards) {
        let face, suit;
        if (card.length === 3 && card.substr(0, 2) === '10') {
            face = 10;
            suit = card[card.length - 1];
        } else {
            face = card[0];
            suit = card[1];
        }
        makeCard(face, suit)
    }
    if (valid) {
        let result = Array.from(deck);
        console.log(result.join(' '));
    }


    function makeCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', 8, 9, 10, 'J', 'Q', 'K', 'A'];
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666 ',
            C: '\u2663'
        };
        if (faces.filter(e => e == face).length === 0) {
            console.log(`Invalid card: ${face}${suit}`);
            valid = false;
            return
        }

        if (!suits.hasOwnProperty(suit)) {
            console.log(`Invalid card: ${face}${suit}`);
            valid = false;
            return
        } else {

            return deck.add(face + suits[suit]);
        }
    }

}

printDeckOfCards(['18S', '10D', 'KH', '2C', '2C']);