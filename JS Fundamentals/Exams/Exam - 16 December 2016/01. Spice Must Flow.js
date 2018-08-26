function spiceMustFlow(mine) {
    let spice = Number(mine[0]);
    let days = 0;
    let collectedSpices = 0;

    while (spice >= 100) {
        collectedSpices += spice - 26;
        days++;
        spice -= 10;
    }

    console.log(days);
    if (collectedSpices >= 26) {
        console.log(collectedSpices - 26);
    }else{
        console.log(0);
    }
}

spiceMustFlow([200]);