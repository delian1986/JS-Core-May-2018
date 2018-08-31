function keyReplacer (input) {
    let keysString=input.shift();
    let keysRegex=/\b([A-z]+)([<|\/]).*[<|\/]([A-z]+)\b/;
    let match;
    let key1,key2;
    let resultString='';

    if (match=keysRegex.exec(keysString)){
        key1=match[1];
        key2=match[3];
    }

    let pattern=new RegExp(key1+'(.*?)'+key2,'gm');

    if (pattern.test(input[0])){
        while (match=pattern.exec(input[0])){
            resultString+=match[1];
        }
        console.log(resultString);
    }else{
        console.log('Empty result');
    }



}

keyReplacer(['start<213asfaas|end' ,
'saaastarthelloendsdarstartFromTheOtherenddvsefdsfstartSideend']);