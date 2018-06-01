function wordOccurences(text,pattern) {
    pattern=`\\b${pattern}\\b`;
    let counter=0;
    let regex= new RegExp(pattern,'gmi');

    let m;

    while (m=regex.exec(text)){
        counter++;
    }

    console.log(counter);
}

wordOccurences('how do you plan on achieving that? How? How can you even think of that?','how');