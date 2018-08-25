function jansNotation(input) {
    let container = [];
    let num1, num2, result;
    let error=false;


    while (input.length&&!error) {
        let instruction = input.shift();

        if (isNaN(instruction)) {
            operator(instruction)
        } else {
            container.push(instruction);
        }
    }

    if (container.length===1&&!error){
        console.log(container[0]);
    }else if(!error){
        console.log('Error: too many operands!');
    }

    function operator(operand) {
        if (numberChecker()) {
            [num1, num2] = takeTwoNums();
            switch (operand) {
                case '+':
                    result = num1 + num2;
                    container.push(result);
                    break;
                case '-':
                    result = num1 - num2;
                    container.push(result);
                    break;
                case '/':
                    result = num1 / num2;
                    container.push(result);
                    break;
                case '*':
                    result = num1 * num2;
                    container.push(result);
                    break;
            }
        } else {
            console.log('Error: not enough operands!');
            error=true;
        }

        function takeTwoNums() {
            num1 = container[container.length - 2];
            num2 = container[container.length - 1];
            container.splice(-2, 2);
            return [num1, num2];
        }

        function numberChecker() {
            if (container.length >= 2) {
                return true;
            } else {

                return false;
            }
        }
    }
}

// jansNotation([3,
//     4,
//     '+']
// );

// jansNotation([5,
//     3,
//     4,
//     '*',
//     '-']
// );

jansNotation([15,
    '/']
);

// jansNotation([31,
//     2,
//     '+',
//     11,
//     '/']
// );