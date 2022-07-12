"use strict";
exports.__esModule = true;
exports.FizzBuzz = void 0;
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz(n) {
        var isFizz = n % 5 == 0;
        var isBuzz = n % 3 == 0;
        if (isFizz && isBuzz) {
            this.message = 'FizzBuzz';
        }
        else if (isFizz) {
            this.message = 'Fizz';
        }
        else if (isBuzz) {
            this.message = 'Buzz';
        }
        else {
            this.message = n + '';
        }
    }
    return FizzBuzz;
}());
exports.FizzBuzz = FizzBuzz;
