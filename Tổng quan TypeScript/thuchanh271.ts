import {Book} from "./thuchanh27";

export class BookManager {
    books: Book[] = [];

    constructor() {
    }

    add(book: Book): void {
        this.books.push(book);
    }

    getList(): Book[] {
        return this.books;
    }

    delete(ID: string): void {
        let indexBookDelete = this.findBook(ID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        } else {
            throw new Error('delete error')
        }
    }

    update(ID: string, name: string) {
        let indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        } else {
            throw new Error('update error')
        }
    }

    findBook(ID: string) {
        let i = -1;
        this.books.forEach((book,  index) => {
            if (book.ID === ID) {
                i = index;
            }
        })

        return i; 
    }
}