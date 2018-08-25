function thePyramidOfKingDjoser(base, height) {
    let steps =1;
    let stone = 0;
    let marble = 0;
    let lapizLazuli = 0;
    let gold = 0;
    let totalHeight = 0;

    while (base > 2) {
        stone += Math.pow(base - 2, 2) * height;
        if (steps % 5 === 0) {
            lapizLazuli += 2*(base+base-2) * height;
        } else {
            marble += 2*(base+base-2) * height;
        }
        base -= 2;
        steps++;
    }
    gold = Math.ceil(Math.pow(base,2) * height);

    console.log(`Stone required: ${Math.ceil(stone)}
Marble required: ${Math.ceil(marble)}
Lapis Lazuli required: ${Math.ceil(lapizLazuli)}
Gold required: ${Math.ceil(gold)}
Final pyramid height: ${Math.floor(height*steps)}
    `);
}

// thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
// thePyramidOfKingDjoser(23,0.5);