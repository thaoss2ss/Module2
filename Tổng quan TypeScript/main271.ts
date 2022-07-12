import {Book} from "./thuchanh27";
import {BookManager} from "./thuchanh271";

let book1 = new Book('B001','Lập trình Java');
let book2 = new Book('B002','Lập trình PHP');
let book3 = new Book('B003','Lập trình TypeScript');

let bookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);

bookManager.update('B003', 'lập trình MySQL')

console.log(bookManager.getList())