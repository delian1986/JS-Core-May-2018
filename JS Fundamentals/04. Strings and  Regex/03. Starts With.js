function startsWith(text,string) {
    let stringToCompare=text.substring(0,string.length);

    if (stringToCompare===string){

    console.log('true');
    } else{
        console.log('false');
    }
}

startsWith('How have you been?','how');
// startsWith('Marketing Fundamentals, starting 19/10/2016','Marketing Fundamentals, sta');