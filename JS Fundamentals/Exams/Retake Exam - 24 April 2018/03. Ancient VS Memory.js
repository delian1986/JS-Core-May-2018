// function ancientVsMemory(inputLines) {
//  70/100
//
//     let message = [];
//     let regex = /(32656 19759 32763) 0 ([0-9]+) 0 ([0-9 ]+)/gm;
//
//     for (let line of inputLines) {
//
//         let m;
//         let text='';
//
//         while ((m = regex.exec(line)) !== null) {
//             // This is necessary to avoid infinite loops with zero-width matches
//             if (m.index === regex.lastIndex) {
//                 regex.lastIndex++;
//             }
//
//             // The result can be accessed through the `m`-variable.
//             let numOfLetters=Number(m[2]);
//
//             let word=m[3].split(/\W+/);
//             for (let i = 0; i < numOfLetters; i++) {
//                 text+=String.fromCharCode(Number(word[i]));
//             }
//             message.push(text);
//         }
//     }
//
//     console.log(message.join('\n'));
// }

function arenaTier(arr) {
    let numArr = arr.join(' ').split(' ');

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i]==='32656'&&numArr[i+1]==='19759'&&numArr[i+2]==='32763'){
            let numOfLetters=Number(numArr[i+4]);
            //console.log(numOfLetters);

            let word= numArr.slice(i+6,i+6+numOfLetters);
            console.log(word.map(st => String.fromCharCode(st)).join(''))
        }
    }
}
ancientVsMemory(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0' ,
'0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0']);

ancientVsMemory(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0' ,
'5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0' ,
'75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101' ,
'114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0']);