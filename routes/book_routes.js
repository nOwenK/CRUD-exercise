import * as BookController from "../controllers/BookControllers.js"
export default function (app) {
    app.route('/book/findAllBooks')
        .get(BookController.findAllBooks);
    app.route('/book/createSingleBook')
        .get(BookController.createSingleBook);
    app.route('/book/updateBook')
        .get(BookController.updateBook);
    app.route('/book/deleteBook')
        .get(BookController.deleteBook)  
}
