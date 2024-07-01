const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    genre: {
        type: String
    },
    price: {
        type: Number
    },
    img: {
        type: String,
    },
    publishYear: {
        type: Number
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;