class Book {
    title: string;
    author: string;
    alreadyRead: boolean;
    constructor(title: string, author: string, alreadyRead: boolean){
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
}

let books: Book[] = [];

let book1 = new Book("Su Ngu Ngoc Cua Kiet","Pham Thanh Thao",true);
let book2 = new Book("100 Cach Chua Benh Co Dien","Hoa Da",false);
let book3 = new Book("Than Dieu Dai Hiep","Kim Dung",true);

books.push(book1, book2, book3);

for (let i = 0; i < books.length; i++){
    let book = books[i];
    let bookInfo =book.title + " " + book.author;
    if (book.alreadyRead){
        console.log("Ban Da Doc " + bookInfo);
    }
    else{
        console.log("Ban Muon Doc " + bookInfo + " Khong? " );
    }
}