//33/100

function surveyParser(input) {
    let surveyResult = '';
    let firstRegex = /<svg>\s*.*<cat>(\s*.*)<\/cat>\s*.*<cat>(.*)<\/cat>\s*.*<\/svg>/;
    let ratinsRegex = /<g><val>((10|[0-9])<\/val>\d+)<\/g>/gm;

    let m = firstRegex.exec(input);
    if (m == null) {
        console.log('No survey found');
        return;
    }
    if (ratinsRegex.exec(input) == null) {
        console.log('Invalid format');
        return;
    }
    let generalMatch = m[1];
    let ratingMatch = m[2];

    let headingRegex = /<text>.*\[(.*)\]<\/text/;
    let heading = headingRegex.exec(generalMatch);
    let header = heading[1];
    surveyResult += header + ': ';

    let ratings;
    let ratеCount = 0;
    let rateValue = 0;

    while ((ratings = ratinsRegex.exec(input)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (ratings.index === ratinsRegex.lastIndex) {
            ratinsRegex.lastIndex++;
        }

        let rate = ratings[1].split('</val>');
        rateValue += Number(rate[0]) * Number(rate[1]);
        ratеCount+=Number(rate[1]);
    }
    let avg=((rateValue/ratеCount).toFixed(2));
    avg=(avg*1).toString();
    surveyResult+=avg;
    console.log(surveyResult);


}

// surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
// surveyParser('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>');
surveyParser('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
// surveyParser('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');