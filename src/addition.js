// @flow

export const print = (...args)=> console.log(args[0].toUpperCase()+ " : "+ args[1]);

export const INPUT_OPTIONS = Symbol("input_options");

export var options = {
    _intro: "You can type",
    [INPUT_OPTIONS]: ["left", "right", "up", "down", "help", "poke"],
    outputOptions(){
        this.options.forEach(f=>
            {
            addToOutput(this._intro+ " "+f);
        })
    }
}