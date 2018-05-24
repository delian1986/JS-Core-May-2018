function composeTag(input) {
    let fileLocation=input[0];
    let alt=input[1];

    console.log(`<img src="${fileLocation}" alt="${alt}">`);
}

composeTag(['smiley.gif', 'Smiley Face']);