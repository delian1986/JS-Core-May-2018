function extractEmails (input) {
    let regex=/(?<=\s)(?!\-|\_|\-|\.)([A-z\d]+)(\.|\-|\_)?[A-z0-9]+@[^-._]([A-z]*(\.|\-)*[a-z])+\.[a-z]+/g;
    let match,emails=[];

    while (match=regex.exec(input[0])){
        emails.push(match[0]);
    }

    console.log(emails.join('\n'));
}

extractEmails([ 'Please contact us at: support@github.com.', 'end' ]);