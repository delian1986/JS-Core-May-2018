function validUsernames (input) {
    // let regex=/(?:\\| |\/|(|))\b([A-z]\w{3,25})\b(?:\\| |\/|(|))/g;
    let regex=/\b[A-Za-z][\w]{2,25}\b/g;
    let match;
    let usernames=[];
    while ((match=regex.exec(input))!==null){
        usernames.push(match[0]);
    }

    let longest=[];
    let maxLength=0;
    let currLenght=0;
    for (let i = 0; i < usernames.length-1; i++) {
        let element=usernames[i].length;
        let nextElement=usernames[i+1].length;
        currLenght=element+nextElement;
        if (currLenght>maxLength){
            maxLength=currLenght;
            longest.length=0;
            longest.push(usernames[i],usernames[i+1])
        }
    }

    console.log(longest.join('\n'));
}
validUsernames([ 'ds3bhj y1ter/wfsdg 1nh_jgf ds2c_vbg\\4htref' ]);