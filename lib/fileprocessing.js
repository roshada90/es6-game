"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onChange = undefined;

var onChange = exports.onChange = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(files, tresCoords, treasures) {
        var processed_arr, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, results, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _onFileSelected(files);

                    case 3:
                        processed_arr = _context.sent;
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 7;
                        _iterator = processed_arr[Symbol.iterator]();

                    case 9:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 34;
                            break;
                        }

                        results = _step.value;

                        (0, _addition.print)("file", results);
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context.prev = 15;
                        for (_iterator2 = results[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            result = _step2.value;

                            tresCoords.add(result.coordinates);
                            treasures.set(result.coordinates, result.treasure);
                        }
                        _context.next = 23;
                        break;

                    case 19:
                        _context.prev = 19;
                        _context.t0 = _context["catch"](15);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context.t0;

                    case 23:
                        _context.prev = 23;
                        _context.prev = 24;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }

                    case 26:
                        _context.prev = 26;

                        if (!_didIteratorError2) {
                            _context.next = 29;
                            break;
                        }

                        throw _iteratorError2;

                    case 29:
                        return _context.finish(26);

                    case 30:
                        return _context.finish(23);

                    case 31:
                        _iteratorNormalCompletion = true;
                        _context.next = 9;
                        break;

                    case 34:
                        _context.next = 40;
                        break;

                    case 36:
                        _context.prev = 36;
                        _context.t1 = _context["catch"](7);
                        _didIteratorError = true;
                        _iteratorError = _context.t1;

                    case 40:
                        _context.prev = 40;
                        _context.prev = 41;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 43:
                        _context.prev = 43;

                        if (!_didIteratorError) {
                            _context.next = 46;
                            break;
                        }

                        throw _iteratorError;

                    case 46:
                        return _context.finish(43);

                    case 47:
                        return _context.finish(40);

                    case 48:
                        _context.next = 53;
                        break;

                    case 50:
                        _context.prev = 50;
                        _context.t2 = _context["catch"](0);

                        (0, _addition.print)("file", "reading error" + _context.t2);

                    case 53:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 50], [7, 36, 40, 48], [15, 19, 23, 31], [24,, 26, 30], [41,, 43, 47]]);
    }));

    return function onChange(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

require("babel-core/register");

require("babel-polyfill");

var _addition = require("./addition.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _onFileSelected(files) {
    var promise = Promise.resolve();
    var arr_promises = [];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        arr_promises.push(pFileReader(file));
    }
    return Promise.all(arr_promises);
}

function pFileReader(file) {
    var reader = new FileReader();
    return new Promise(function (resolve, reject) {
        reader.onload = function (evt) {
            if (evt.target.readyState == FileReader.DONE) {
                resolve(JSON.parse(evt.target.result));
            }
        };
        if (file) {
            reader.readAsText(file, "UTF-8");
        }
    });
}
//# sourceMappingURL=fileprocessing.js.map