"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this._radius;
    };
    Circle.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Circle.prototype.ToString = function () {
        return "Hình tròn bán kính là : " + this.getRadius();
    };
    return Circle;
}());
exports.Circle = Circle;
