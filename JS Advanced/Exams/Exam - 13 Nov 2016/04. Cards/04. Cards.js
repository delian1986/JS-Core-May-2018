function cardDeckBuilder(selector) {
    let faces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits={
        C:'\u2663',
        D:'\u2666',
        H:'\u2665',
        S:'\u2660'
    };
    let cards=[];
    return{
        addCard(face,suit){
            if (faces.includes(face)&&suits.hasOwnProperty(suit)){
                let card=$(`<div class="card">${face}${suits[suit]}</div>`).click(reverseCards);
                cards.push(card);
                $(selector).append(card)
            }
        }
    };
    function reverseCards(){
        cards.reverse();
        $(selector).empty();
        for (let card of cards) {
            $(selector).append((card).click(reverseCards));
        }
    }
}