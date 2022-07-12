"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "red";
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (value) {
        this.radius = value;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.toString = function () {
        return "Hình tròn có bán kính ="
            + this.getRadius() + "Màu " + this.getColor()
            + "Diện tích =" + this.getArea();
    };
    return Circle;
}());
exports.Circle = Circle;
