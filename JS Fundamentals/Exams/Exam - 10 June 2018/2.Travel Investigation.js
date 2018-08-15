function travelInvestigation(input) {   //87/100
    let delimiter = input[1];
    let companies = input[0].split(`${delimiter}`);
    let valid = [];
    let invalid = [];

    let regexString = '';

    for (let company of companies) {

        regexString += `(?=.*${company.trim()}).*`;
    }

    let regex = RegExp(regexString,'i');

    for (let i = 2; i < input.length; i++) {
        if (regex.test(input[i])) {
            valid.push(input[i].toLowerCase());
        } else {
            invalid.push(input[i].toLowerCase());
        }
    }

    if (valid.length>0){
        console.log('ValidSentences');
        for (let i = 0; i < valid.length; i++) {
            console.log(`${i + 1}. ${valid[i]}`);
        }
    }
    if (valid.length>0&&invalid.length>0){
        console.log('='.repeat(30));

    }
    if (invalid.length>0){
        console.log('InvalidSentences');
        for (let i = 0; i < invalid.length; i++) {
            console.log(`${i + 1}. ${invalid[i]}`);
        }
    }

}

// travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@,",
//     "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
//     "someone continues as no "]
// );

travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);

