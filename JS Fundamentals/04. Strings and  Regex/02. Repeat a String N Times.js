function repeatStringNTimes(text,count) {
    count=Number(count);
    let repeatedString=text.repeat(count);

    console.log(repeatedString);
}

repeatStringNTimes('repeat','5');