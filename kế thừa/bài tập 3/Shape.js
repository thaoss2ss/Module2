"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this.name = name;
        this.color = color;
    }
    Shape.prototype.getName = function () {
        return this.name;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    return Shape;
}());
exports.Shape = Shape;
