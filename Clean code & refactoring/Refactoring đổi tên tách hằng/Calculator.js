"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.calculate = function (a, b, o) {
        switch (o) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b != 0)
                    return a / b;
                else
                    console.log("Can not divide by 0");
            default:
                console.log("Unsupported operation");
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
