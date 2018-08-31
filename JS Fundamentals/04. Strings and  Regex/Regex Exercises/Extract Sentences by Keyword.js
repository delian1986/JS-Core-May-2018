function extractSentencesByKeyword (input) {
    let keyword=input.shift();
    let pattern='[^.?!]* '+keyword+' [^.?!]*';
    let regex=new RegExp(pattern,'gm');
    let match,sentences=[];
    while (match=regex.exec(input[0])){
        sentences.push(match[0].trim());
    }

    console.log(sentences.join('\n'));
}

extractSentencesByKeyword([ 'to',
    'Welcome to SoftUni! You will learn programming, algorithms, problem solving and software technologies. You need to allocate for study 20-30 hours weekly. Good luck! I am fan of Motorhead. To be or not to be - that is the question. TO DO OR NOT?' ]);