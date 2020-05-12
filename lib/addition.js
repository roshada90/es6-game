"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _options;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var print = exports.print = function print() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return console.log(args[0].toUpperCase() + " : " + args[1]);
};

var INPUT_OPTIONS = exports.INPUT_OPTIONS = Symbol("input_options");

var options = exports.options = (_options = {
    _intro: "You can type"
}, _defineProperty(_options, INPUT_OPTIONS, ["left", "right", "up", "down", "help", "poke"]), _defineProperty(_options, "outputOptions", function outputOptions() {
    var _this = this;

    this.options.forEach(function (f) {
        addToOutput(_this._intro + " " + f);
    });
}), _options);
//# sourceMappingURL=addition.js.map