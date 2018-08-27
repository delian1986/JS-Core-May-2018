function arithmephile(input) {
    input = input.map(Number);
    let best = -Infinity;

    while (input.length) {
        let num = input.shift();
        if (num >= 10 || num < 0) {
            continue;
        }
        let current = 1;
        for (let j = 0; j < num; j++) {
            current *= input[j]
        }
        if (current > best) {
            best = current;
        }
    }

    console.log(best);
}

arithmephile(['10', '20', '2', '30', '44', '3', '56', '20', '24']);
arithmephile(['100', '200', '2', '3', '2', '3', '2', '1', '1']);