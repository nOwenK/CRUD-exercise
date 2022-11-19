export default class Book {
    constructor(book){
        this.id = book.id
        this.author = book.author
    }

    static getSingularBook(rows) {
        return new Book(rows[0])
    }
    static getAllBooks(rows) {
        return rows.map(r=> new Book(r))
    }
}