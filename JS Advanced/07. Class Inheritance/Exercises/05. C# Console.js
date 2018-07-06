//71/100

let expect=require('chai').expect;

let Console=class Console {

    static get placeholder() {
        return /{\d+}/g;
    }

    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {
            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            }
            else if (typeof(message) === 'string') {
                return message;
            }
        }
        else {
            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            }
            else {
                let tokens = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (tokens.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                }
                else {
                    for (let i = 0; i < tokens.length; i++) {
                        let number = Number(tokens[i].substring(1, tokens[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        }
                        else {
                            message = message.replace(tokens[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
};



describe('C# Console Unit Tests', function () {
    it('writeLine is a functions', function () {
        expect(typeof Console.writeLine).to.equal('function');
    });
    it('writeLine correct output with string', function () {
        Console.writeLine('test');
        expect(Console.writeLine('test')).to.equal('test');
    });
    it('writeLine correct output with object', function () {
        let testObj={key:'value'};
        let expectedOutput=JSON.stringify(testObj);
        expect(Console.writeLine(testObj)).to.equal(expectedOutput);
    });
    it('writeLine correct TypeError with !string', function () {
        expect(()=>Console.writeLine(Function).to.throw(TypeError));
    });
    it('writeLine incorrect amount of variables', function () {
        let string="My {0} is {1}. I want to say {3}";
        expect(()=>Console.writeLine(string).to.throw(RangeError));
    });
    it('writeLine correct amount of variables', function () {
        let string='String should, be correct - now';
        expect(Console.writeLine('String {1}, {0} {2} - {3}', 'be', 'should', 'correct', 'now')).to.equal(string);
    });
    it('writeLine empty string', function () {
        expect(()=>Console.writeLine().to.throw(TypeError));
    });
    it('writeLine incorrect placeholders', function () {

        expect(()=>Console.writeLine('{0},{12}','Pesho','Gosho').to.throw(TypeError));
    });
    it('writeLine incorrect placeholders', function () {

        expect(()=>Console.writeLine('{0},{1}','Pesho','Gosho','Stamat').to.throw(RangeError));
    });
    it('should replace correctly one placeholder', () => {
        expect(Console.writeLine('{0}', 'first')).to.equal('first');
    });
    it('should replace correctly all placeholders', () => {
        expect(Console.writeLine('Test {0}, {1} {2} - {3}', 'first', 'second', 'third', 'chetvyrti')).to.equal('Test first, second third - chetvyrti');
    });
    it('should throw RangeError on negative placeholder index', () => {
        expect(() => Console.writeLine('Test {-5}, {1} {2}', 'first', 'second', 'third')).to.throw(RangeError);
    });
    it('should return undefined on non-string argument', () => {
        let res = Console.writeLine(123);
        expect(res).to.equal(undefined);
    });

})