"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.add = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype["delete"] = function (ID) {
        var indexBookDelete = this.findBook(ID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    BookManager.prototype.update = function (ID, name) {
        var indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            throw new Error('update error');
        }
    };
    BookManager.prototype.findBook = function (ID) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.ID === ID) {
                i = index;
            }
        });
        return i;
    };
    return BookManager;
}());
exports.BookManager = BookManager;
