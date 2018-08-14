function travelInvestigation(input) {
    let delimiter = input[1];
    let companies = input[0].split(`${delimiter}`);

    let regexString = '';

    for (let company of companies) {
        regexString += `(?=.*${company})`;
    }

    let valid = [];
    let invalid = [];

    let regex = RegExp(regexString);
    // console.log(regex);

    for (let i = 2; i < input.length; i++) {
        if (regex.test(input[i].toLowerCase())) {
            valid.push(input[i].toLowerCase());
        } else {
            invalid.push(input[i].toLowerCase());
        }
    }

    console.log('ValidSentences');
    for (let i = 0; i < valid.length; i++) {
        console.log(`${i + 1}. ${valid[i]}`);
    }
    console.log('='.repeat(30));
    console.log('InvalidSentences');
    for (let i = 0; i < invalid.length; i++) {
        console.log(`${i + 1}. ${invalid[i]}`);
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

