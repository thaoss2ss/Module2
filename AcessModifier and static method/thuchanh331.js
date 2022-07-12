"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.product = [];
    }
    ProductManager.prototype.getAll = function () {
        return this.product;
    };
    ProductManager.prototype.add = function (product) {
        this.product.push(product);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
