function makeCard(face, suit) {
    let faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666 ',
        C: '\u2663'
    };
    if((faces.filter(e => e === face).length===0)){
      throw 'Error';
    }

    if (!suits.hasOwnProperty(suit)){
        throw "Error";
    }

    return face+suits[suit]

}

console.log('' + makeCard('1', 'S'));
