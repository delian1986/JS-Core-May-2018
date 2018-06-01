function findVariableNamesInSentences(text) {
    let variables=[];
    let regex= /\b_[a-zA-Z0-9]+\b/gm;
    let m;

    while (m = regex.exec(text)){
        variables.push(m[0].replace('_',''));
    }
    console.log(variables.join(','));
}

// findVariableNamesInSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
findVariableNamesInSentences('Calculate the _area of the _perfectRectangle object.');