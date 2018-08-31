function matchHexadecimalNumbers(input) {

    let elements=input[0].split(/\W+/);
    let regex= /\b(?:0x)?[0-9A-F]+\b/,g;
    let hexColors=[];

    for (let  line of elements) {
        if (regex.test(line)){
            hexColors.push(line)
        }
    }

    console.log(hexColors.join(' '));
}

matchHexadecimalNumbers('1F 0xG 0x1F G 0x4G 4G 0xAB 0xFG FG 0x10   10 AB  FF');