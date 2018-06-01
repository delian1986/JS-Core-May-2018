function capitalizeWords(text) {
    let words=text.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word=words[i];
        let capitalLetter=word[0].toUpperCase();
        let lowerLetters="";
        for (let j = 1; j < word.length; j++) {
            lowerLetters+=word[j].toLowerCase();
        }
        words[i]=capitalLetter+lowerLetters;
    }

    console.log(words.join(' '));
}

capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');