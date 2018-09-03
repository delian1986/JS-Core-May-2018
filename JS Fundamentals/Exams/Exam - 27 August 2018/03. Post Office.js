function postOffice(input) {
    let [firstPart, secondPart, thirdPart] = input[0].split('|');

    //defining capital letters
    let firstPartRegex = /(#|\$|%|\*|&)([A-Z]{1,})(\1)/;
    let match = firstPartRegex.exec(firstPart);
    let wordCapitals = match[2];
    let asciCapitals = [];
    for (let str of wordCapitals) {
        //saving as letter's ascii
        asciCapitals.push(str.charCodeAt(0));
    }

    //defining strings lengths
    let stringLength = [];
    for (let charAscii of asciCapitals) {
        let secondPattern = `${charAscii}:(0[1-9]|[1-9]{2})`;
        let secondRegex = new RegExp(secondPattern,'g');
        match = secondRegex.exec(secondPart);
        stringLength.push(Number(match[1]));
    }

    // defining result words
    let resultWords=[];
    thirdPart=thirdPart.split(' ').join('\n');
    for (let i = 0; i < asciCapitals.length; i++) {
        let capital=String.fromCharCode(asciCapitals[i]);
        let length=Number(stringLength[i]);
        let thirdPattern=`^${capital}\\S{${length}}$`;
        let thirdRegex=new RegExp(thirdPattern,'gm');
        match=thirdRegex.exec(thirdPart);
        resultWords.push(match[0]);
    }

    console.log(resultWords.join('\n'));
}

// postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);

postOffice([ 'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig' ]);
// postOffice()