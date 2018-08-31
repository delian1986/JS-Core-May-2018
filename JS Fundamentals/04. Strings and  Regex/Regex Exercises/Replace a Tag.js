function replaceATag (input) {
    let html=input[0];
    let regex=/<a.*?href.*?=(.*)>(.*?)<\/a>/gm;
    let match;
    while (match=regex.exec(html)){
        html=html.replace(regex,`[URL href=$1]$2[/URL]`)
    }

    console.log(html);
}

replaceATag([ '<ul><li><ahref="http://softuni.bg">SoftUni</a></li></ul>',
    'end' ]
);