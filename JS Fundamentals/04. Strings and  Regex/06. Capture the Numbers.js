function captureNums(args) {
    let nums = [];
    let regex = /\d+/gm;
    let m;

     for (let i = 0; i < args.length; i++) {
         while (m = regex.exec(args[i])){
             nums.push(m[0]);
         }
     }

    console.log(nums.join(' '));

}

captureNums(['The300',
    'What is that?',
    'I think it�s the 3rd movie.',
    'Lets watch it at 22:45']);