//70/100

function softUniBarIncome(input) {
    let regex = /%([A-Z]{1}[a-z]+)%[^|$%.]*<([a-zA-Z]+)>[^|$%.]*\|([0-9]+)\|[^|$%.]*?([0-9]*\.?[0-9]+)\$/g;

    let totalIncome = 0;
    for (let line of input) {
        if (line !== 'end of shift') {
           let m;
           while (m=regex.exec(line)){
               let customer=m[1];
               let product=m[2];
               let quantity=Number(m[3]);
               let price=Number(m[4]);
               let singlePrice=quantity*price;
               totalIncome+=Number(singlePrice);
               console.log(`${customer}: ${product} - ${singlePrice.toFixed(2)}`);
           }
        }
    }

    console.log('Total income: '+totalIncome.toFixed(2));
}

// softUniBarIncome(['%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift']);

softUniBarIncome([ '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift' ]
);