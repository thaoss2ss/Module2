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
exports.Cylinder = void 0;
var Circle_1 = require("./Circle");
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(height, radius, color) {
        var _this = _super.call(this, radius, color) || this;
        _this.height = 1.0;
        _this.height = height;
        return _this;
    }
    Cylinder.prototype.getHeight = function () {
        return this.height;
    };
    Cylinder.prototype.setHeight = function (value) {
        this.height = value;
    };
    Cylinder.prototype.getArea = function () {
        return _super.prototype.getArea.call(this);
    };
    Cylinder.prototype.getVolume = function () {
        return this.height * _super.prototype.getArea.call(this) * this.getRadius() * this.getRadius();
    };
    Cylinder.prototype.toString = function () {
        return "Hình trụ có chiều cao là " + this.getHeight() + " Thể tích là " + this.getVolume();
    };
    return Cylinder;
}(Circle_1.Circle));
exports.Cylinder = Cylinder;
