
import connectDB from "../db_connect.js";
import Book from '../models/book.js'

async function findAllBooks(){
    let books
    await connectDB(async(db)=>{
        try {
            books = await db.collection('books').find({}).toArray()
            if (!books)
                return null
        }catch (e) {
            console.log(e)
        }
    })
    console.log("Find books")
    // books = Book.getAllBooks(books)
    return (books)
}
async function createSingleBook(title, author){
    let newBook
    await connectDB(async(db)=>{
        try {
            newBook = await db.collection('books').insertOne({
                title: title,
                category: [ 'Testing', 'Testing' ],
                author: author,
                price: 99999,
                published: 9999,
                company: 'PT. Testing',
                language: 'Indonesian'
            })
            if (!newBook)
                return null
        }catch (e) {
            console.log(e)
        }
    })
    console.log("Create a book")
    return (newBook)
}
async function updateBook(title, newTitle){
    let newBook
    await connectDB(async(db)=>{
        try {
            newBook = await db.collection('books').updateOne({
                title: title
            }, {
                $set: {
                    title: newTitle
                }
            })
            if (!newBook)
                return null
        }catch (e) {
            console.log(e)
        }
    })
    console.log("Update a book")
    return (newBook)
}
async function deleteBook(author){
    let newBook
    await connectDB(async(db)=>{
        try {
            newBook = await db.collection('books').deleteOne({
                author: author
            })
            if (!newBook)
                return null
        }catch (e) {
            console.log(e)
        }
    })
    console.log("Delete a book")
    return (newBook)
}

export default {
    findAllBooks,
    createSingleBook,
    updateBook,
    deleteBook
}