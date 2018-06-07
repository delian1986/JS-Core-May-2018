function gladiatorExpenses(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    let aureusSpent=0;

    let shieldBrakes=0;


    for (let i = 1; i <= lostFights; i++) {
        if (i%2==0){
            aureusSpent+=helmetPrice;
        }
         if (i%3==0){
            aureusSpent+=swordPrice;
        }
        if (i%2==0&&i%3==0){
            aureusSpent+=shieldPrice;
            shieldBrakes++;
            if (shieldBrakes%2==0){
                aureusSpent+=armorPrice;
            }
        }
    }



    console.log(`Gladiator expenses: ${aureusSpent.toFixed(2)} aureus`);
}

gladiatorExpenses(7,
2,
3,
4,
5
);

gladiatorExpenses(23,
12.50,
21.50,
40,
200,
);