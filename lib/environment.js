"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Environment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encounter = require("./encounter.js");

var encounter = _interopRequireWildcard(_encounter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = exports.Environment = function () {
    function Environment(name) {
        _classCallCheck(this, Environment);

        this.name = name;
        this.encounter = encounter.generate();
    }

    _createClass(Environment, [{
        key: "stumbleUpon",
        value: function stumbleUpon() {
            this.encounter = encounter.generate();
            this.pokeEncounter = this.encounter.poke();
            var interaction = this.name + "You just stumbled upon ..." + this.encounter.whenEncounter();
            return interaction;
        }
    }, {
        key: "poke",
        value: function poke() {
            var pokeReturn = this.pokeEncounter.next();
            if (!pokeReturn.done) {
                return pokeReturn.value;
            }
        }
    }]);

    return Environment;
}();
//# sourceMappingURL=environment.js.map