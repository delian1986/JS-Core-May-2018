function bitcoinMinning(goldIncome) {
    //console.log(goldIncome);

    let allLeva = 0.0;
    let bitcoins = 0.0;
    let bitcoinPrice=11949.16;
    let goldToLeva=67.51;
    let firstTime=0;

    for (let i = 1; i <= goldIncome.length; i++) {
        let dailyIncome = parseInt(goldIncome[i-1])*goldToLeva;
        if (i/3>0 && i%3==0) {
            dailyIncome*=0.7;

        }
        let dailyLeva=0;
        dailyLeva += dailyIncome;
        allLeva+=dailyLeva;


        if (allLeva>=bitcoinPrice){
            let coinsBouth=Math.floor(allLeva/bitcoinPrice);
            bitcoins+=coinsBouth;
            allLeva-=coinsBouth*bitcoinPrice;

            if (firstTime==0){
                firstTime=i;
            }
            //console.log(coinsBouth);
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(firstTime>0){
        console.log(`Day of the first purchased bitcoin: ${firstTime}`);
    }
    console.log(`Left money: ${allLeva.toFixed(2)} lv.`);


}
//
// bitcoinMinning(['100',
//     '200',
//     '300',
// ]);

bitcoinMinning(['3124.15',
    '504.212',
    '2511.124']);