//0/100


class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this._input = this.addInput;
    }

    addInput(label, name, type) {
        let input = $('<div class="overlay">')
        let dialogDiv = ('<div class="dialog">');

        let messageWindow = ('<p>Dialog, containing message text and input field.</p>')
            .append(`<label>${label}</label>`)
            .append(`<input name="${name}" type="${type}">`);

        $(messageWindow).appendTo($(dialogDiv));
        $(dialogDiv).appendTo($(input));
        console.log(dialogDiv);

        let btnOk = $(`<button>OK</button>`).on('click', function () {

        });
        let btnCancel = $(`<button>Cancel</button>`);

        $('.dialog').append(btnOk);
        $('.dialog').append(btnCancel);

        return input;
    }

    render() {
        $("body").append(this._input);
    }
}