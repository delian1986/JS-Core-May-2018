function matchNumbers (input) {
    let match,nums=[];
    let regex=/(^|(?<=\s))-?\d+(\.\d+)?($|(?=\s))/g;
    while (match=regex.exec(input[0])){
        nums.push(match[0]);
    }
    console.log(nums.join(' '));
}

matchNumbers([ '1 -1 1s 123 s-s -123 _55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5' ]);