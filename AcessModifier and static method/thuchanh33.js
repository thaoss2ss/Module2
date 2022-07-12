"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Product;
}());
exports.Product = Product;
