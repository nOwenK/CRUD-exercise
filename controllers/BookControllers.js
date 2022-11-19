import express from 'express'
import booksDAO from '../daos/books_dao.js'

var app = express();
export async function findAllBooks(req,res) {
    try {
        console.log("Test")
        let getAllBook = await booksDAO.findAllBooks()
        console.log(getAllBook)
        res.send(getAllBook)
    }catch (e) {
        res.send(e)
    }
}
export async function createSingleBook(req,res) {
    try {
        console.log("Test2")
        // let test = 'oy'
        let createNewBook = await booksDAO.createSingleBook(req.query.title, req.query.author)
        console.log(createNewBook)
        res.send(createNewBook)
    }catch (e) {
        res.send(e)
    }
}
export async function updateBook(req,res) {
    try {
        console.log("Test3")
        let updateBook = await booksDAO.updateBook(req.query.title, req.query.newTitle)
        console.log(updateBook)
        res.send(updateBook)
    }catch (e) {
        res.send(e)
    }
}
export async function deleteBook(req,res) {
    try {
        console.log("Test4")
        let deleteBook = await booksDAO.deleteBook(req.query.author)
        console.log(deleteBook)
        res.send(deleteBook)
    }catch (e) {
        res.send(e)
    }
}
