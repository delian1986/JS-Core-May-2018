function argumentInfo() {

    let type = {};

    for (let arg of arguments) {
        console.log((`${typeof (arg)}: ${arg}`));
        if (!type.hasOwnProperty(`${typeof (arg)}`)) {
            type[`${typeof (arg)}`] = 0;
        }
        type[`${typeof(arg)}`]++;
    }

    let sorted = Object.keys(type).sort((a, b) => type[b] - type[a]);

    for (const typeElement of sorted) {
        console.log(`${typeElement} = ${type[typeElement]}`);
    }
}

argumentInfo('cat', 'cat', 42,55, function () {
    console.log('Hello world!');
});