"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MultiplyList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("babel-core/register");

require("babel-polyfill");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultiplyList = exports.MultiplyList = function () {
    function MultiplyList(list, limit) {
        _classCallCheck(this, MultiplyList);

        this.list = list;
        this.limit = limit;
    }

    _createClass(MultiplyList, [{
        key: Symbol.iterator,
        value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

            return regeneratorRuntime.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = this.list[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 22;
                                break;
                            }

                            value = _step.value;

                            if (!this.isNumeric(value)) {
                                _context.next = 17;
                                break;
                            }

                            if (!(value > this.limit)) {
                                _context.next = 13;
                                break;
                            }

                            _context.next = 11;
                            return value * 2;

                        case 11:
                            _context.next = 15;
                            break;

                        case 13:
                            _context.next = 15;
                            return value;

                        case 15:
                            _context.next = 19;
                            break;

                        case 17:
                            _context.next = 19;
                            return 0;

                        case 19:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 22:
                            _context.next = 28;
                            break;

                        case 24:
                            _context.prev = 24;
                            _context.t0 = _context["catch"](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 28:
                            _context.prev = 28;
                            _context.prev = 29;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 31:
                            _context.prev = 31;

                            if (!_didIteratorError) {
                                _context.next = 34;
                                break;
                            }

                            throw _iteratorError;

                        case 34:
                            return _context.finish(31);

                        case 35:
                            return _context.finish(28);

                        case 36:
                        case "end":
                            return _context.stop();
                    }
                }
            }, value, this, [[3, 24, 28, 36], [29,, 31, 35]]);
        })
    }, {
        key: "isNumeric",
        value: function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }]);

    return MultiplyList;
}();
//# sourceMappingURL=multiply_list.js.map