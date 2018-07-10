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



describe("class Console static writeLine", function () {
    it("should return the same string for single string argument", function () {
        let string = "One single string";
        expect(Console.writeLine(string)).to.equal(string);
    });
    it("should return JSON string for single object argument", function () {
        let object = {name: "Pesho", age: 32};
        expect(Console.writeLine(object)).to.equal(JSON.stringify(object))
    });
    it("should throw error if no arguments were given", function () {
        expect(() => Console.writeLine()).to.throw(TypeError);
    });
    it("should throw error if first argument is not string", function () {
        expect(() => Console.writeLine(5, 1, 2)).to.throw(TypeError)
    });
    it("should throw error if placeholders are less than arguments", function () {
        let string = "This {0} should {1} replaced.";
        expect(() => Console.writeLine(string, "one", "be", "three")).to.throw(RangeError);
    });
    it("should throw error if place of placeholders is changed", function () {
        let string = "This {0} should {0} replaced.";
        expect(() => Console.writeLine(string, "one", "be")).to.throw(RangeError);
    });
    it("should successfully replace placeholders with valid arguments", function () {
        let string = "This {0} should {1} replaced.";
        expect(Console.writeLine(string, "one", "be")).to.equal("This one should be replaced.");
    });
    it("should throw error if invalid placeholder is given", function () {
        let string = "This {0} should {1} replaced. This one {2} not work.";
        expect(() => Console.writeLine(string, "one", "be")).to.throw(RangeError);
    });
    it("should recognize the placeholder numbers well", function () {
        expect(() => Console.writeLine("Not {10}", "valid")).to.throw(RangeError);
    });
});