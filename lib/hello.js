'use strict';

var _environment = require('./environment');

var _addition = require('./addition');

var _multiply_list = require('./multiply_list');

var _fileprocessing = require('./fileprocessing.js');

var defaultLine = "Let's begin the game";
var BR = "<br/>";

var environment = new _environment.Environment("Roshada -");
var treasures = new WeakMap();
var tresCoords = new Set();
var _fileInput;
var main = function main() {
    var enterEl = document.querySelector("#enter");
    enterEl.addEventListener("click", onClickEnter, false);
    addToOutput();
    var coordinate1 = { x: 2, y: 2 };
    tresCoords.add(coordinate1);
    treasures.set(coordinate1, { name: "treasure chest", value: 100 });
    var coordinate2 = { x: 2, y: 0 };
    tresCoords.add(coordinate2);
    treasures.set(coordinate2, { name: "medallion", value: 10 });

    _fileInput = document.querySelector("#files");
    _fileInput.onchange = function () {
        (0, _fileprocessing.onChange)(_fileInput.files, tresCoords, treasures);
    };
};

function findTreasure() {
    var findCoords = void 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = tresCoords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var coords = _step.value;

            if (coords.x == x && coords.y == y) {
                findCoords = coords;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (findCoords) {
        var _treasures$get = treasures.get(findCoords),
            name = _treasures$get.name,
            _value = _treasures$get.value;

        if (_value) {
            addToOutput('You found a ' + name + ' worth ' + _value + ' dollars');
        }
    }
}
var x = 0,
    y = 0;
function navigate(stepX, stepY) {
    var _ref = [x + stepX, y + stepY];
    x = _ref[0];
    y = _ref[1];

    var coordinates = document.querySelector("#coordinates");
    coordinates.innerHTML = x + ', ' + y;
    findTreasure();
}

function addToOutput() {
    var newLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLine;

    var output = document.querySelector("#predefined");
    output.innerHTML += BR + newLine;
}

function onCommand(command) {
    if (command === "help") {
        _addition.options.outputOptions();
    } else if (command === "clear") {
        document.querySelector("#output").innerHTML = "";
    } else if (command === "left") {
        navigate(-1, 0);
        addToOutput(environment.stumbleUpon());
    } else if (command === "right") {
        navigate(1, 0);
        addToOutput(environment.stumbleUpon());
    } else if (command === "up") {
        navigate(0, -1);
        addToOutput(environment.stumbleUpon());
    } else if (command === "down") {
        navigate(0, 1);
        addToOutput(environment.stumbleUpon());
    } else if (command === "poke") {
        addToOutput(environment.poke());
    } else {
        addToOutput(command);
    }
}

function onClickEnter() {
    var commands = document.querySelector("#commands");
    onCommand(commands.value);
}

main();
console.log(Object.getOwnPropertySymbols(_addition.options));
var multiplyList = new _multiply_list.MultiplyList([1, 4, "", 5, 1], 2);
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = multiplyList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var value = _step2.value;

        (0, _addition.print)("list", value);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}
//# sourceMappingURL=hello.js.map