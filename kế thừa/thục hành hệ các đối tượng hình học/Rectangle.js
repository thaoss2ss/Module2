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
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height, color, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.width = 1.0;
        _this.height = 1.0;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };
    Rectangle.prototype.getArea = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    Rectangle.prototype.toString = function () {
        return "A Rectangle with width="
            + this.getWidth()
            + " and length="
            + this.getHeight()
            + ", which is a subclass of "
            + _super.prototype.toString.call(this);
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
