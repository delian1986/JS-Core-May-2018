function softUniExamResults(input) {
    let results = {};
    let submissions = {};

    for (let line of input) {
        let args = line.split('-');
        if (args.length === 3) {
            let username = args[0];
            let language = args[1];
            let score = Number(args[2]);

            if (!results.hasOwnProperty(username)) {
                results[username] = score;
            } else if (results[username] < score) {
                results[username] = score;
            }

            if (!submissions.hasOwnProperty(language)) {
                submissions[language] = 1;
            } else {
                submissions[language]++;
            }
        } else {
            let username = args[0];
            if (results.hasOwnProperty(username)) {
                delete results[username];
            }
        }
    }

    //sorting by score first then by name
    let resultsVals = Object.keys(results).sort((a, b) => {

        if (results[a] - results[b] === 0) {
                return a.localeCompare(b);
            } else {
                return results[a] < results[b]
            }
        }
    );

    console.log('Results:');
    for (let result of resultsVals) {
        console.log(`${result} | ${results[result]}`);
    }

    //sorting by score first then by name
    let submissionsVal=Object.keys(submissions).sort((a, b) => {

            if (submissions[a] - submissions[b] === 0) {
                return a.localeCompare(b);
            } else {
                return submissions[a] < submissions[b]
            }
        }
    );

    console.log('Submissions:');
    for (let sub of submissionsVal) {
        console.log(`${sub} - ${submissions[sub]}`);
    }

}

//
// softUniExamResults([ 'Pesho-Java-84',
//     'Gosho-C#-70',
//     'Gosho-C#-84',
//     'Kiro-C#-94',
//     'exam finished' ]);

softUniExamResults(['Pesho-Java-91',
    'Gosho-C#-84',
    'Kiro-JavaScript-90',
    'Kiro-C#-50',
    'Kiro-banned',
    'exam finished']);
