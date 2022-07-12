var Book = /** @class */ (function () {
    function Book(title, author, alreadyRead) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
    return Book;
}());
var books = [];
var book1 = new Book("Su Ngu Ngoc Cua Kiet", "Pham Thanh Thao", true);
var book2 = new Book("100 Cach Chua Benh Co Dien", "Hoa Da", false);
var book3 = new Book("Than Dieu Dai Hiep", "Kim Dung", true);
books.push(book1, book2, book3);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + " " + book.author;
    if (book.alreadyRead) {
        console.log("Ban Da Doc " + bookInfo);
    }
    else {
        console.log("Ban Muon Doc " + bookInfo + "Khong? ");
    }
}
