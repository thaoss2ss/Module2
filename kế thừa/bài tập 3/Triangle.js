"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Triangle = void 0;
var Shape_1 = require("./Shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, side1, side2, side3, haftParimeter) {
        if (haftParimeter === void 0) { haftParimeter = (side1 + side2 + side3) / 2; }
        var _this = _super.call(this, name, color) || this;
        _this.side1 = side1;
        _this.side2 = side2;
        _this.side3 = side3;
        _this.haftP = haftParimeter;
        return _this;
    }
    Triangle.prototype.getInfo = function () {
        return { name: this.name, color: this.color, side1: this.side1, side2: this.side2, side3: this.side3 };
    };
    Triangle.prototype.getSide1 = function () {
        return this.side1;
    };
    Triangle.prototype.getSide2 = function () {
        return this.side2;
    };
    Triangle.prototype.getSide3 = function () {
        return this.side3;
    };
    Triangle.prototype.getHaftParimeter = function () {
        return this.haftP;
    };
    Triangle.prototype.getArea = function () {
        return "Diện tích tam giác là :" + (Math.sqrt(this.haftP * (this.haftP - this.side1) * (this.haftP - this.side2) * (this.haftP - this.side3)));
    };
    Triangle.prototype.getParimeter = function () {
        return "Chu vi tam giác là :" + (this.side1 + this.side2 + this.side3);
    };
    return Triangle;
}(Shape_1.Shape));
exports.Triangle = Triangle;
