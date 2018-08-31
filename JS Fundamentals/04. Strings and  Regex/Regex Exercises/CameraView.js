function cameraView(input) {
    let startIndex=Number(input.shift())+2;
    let endIndex=Number(input.shift())+startIndex;
    let regex=/\|<\w+/g;
    let match;

    while (match=regex.exec(input)){
        let view=match[0].substr(startIndex,endIndex);
        console.log(view);
    }

}

cameraView(['9','7',
'GreatBigSea|<uglyStuffHawaii|<boriiiingKilauea']);
cameraView(['0','5',
'|>invalid|<beach|noMoreCameras']);