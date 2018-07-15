class Textbox {
    constructor (selector,regex){
        this.selector=selector;
        this._regex=regex;
        this._elements=$(this.selector);
        $(this.selector).on('input',function () {
            $('*[type=text]').val(this.value);
        })
    }

    get value(){
        return this.elements.val();
    }
    set value(newValue){
        this.elements.val(newValue)
    }

    get elements(){
        return this._elements;
    }
    isValid(){
        return !this.value.match(this._regex)
    }

}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
