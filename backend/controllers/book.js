const Book = require('../models/Book');

// GET books
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if (!books) {
            return res.status(404).json({ message: "Books not found" });
        }
        res.json({
            count: books.length,
            data: books
        }).status(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
};

// POST book
const createBook = async (req, res) => {
    const { title, author, description, genre, price, img, publishYear } = req.body;

    if (!title || !author || !description || !genre || !price || !img || !publishYear) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newBook = await Book.create(req.body);

        if (!newBook) {
            return res.status(400).json({ message: "Book not created" });
        }

        res.json(newBook).status(201);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
};

// GET book
const getBook = async (req, res) => {

    const { id } = req.params;

    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(book).status(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
};

// PUT book
const updateBook = async (req, res) => {

    const { id } = req.params;

    try {
        const book = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(book).status(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
};

// DELETE book
const deleteBook = async (req, res) => {

    const { id } = req.params;

    try {
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: `Book with title '${book.title}' by '${book.author}' that costs '$${book.price}' has been deleted successfully !!` }).status(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
};

// SEARCH Books
const searchBooks = async (req, res) => {
    const searchTerm = req.query.q;

    try {
        const books = await Book.find({
            $or: [
                { title: { $regex: searchTerm.trim(), $options: 'i' } },
                { author: { $regex: searchTerm.trim(), $options: 'i' } },
                { genre: { $regex: searchTerm.trim(), $options: 'i' } },
                { description: { $regex: searchTerm.trim(), $options: 'i' } }
            ]
        });

        if (!books) {
            return res.status(404).json({ message: "Searched Books Not Found" });
        }

        res.json(books).status(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { getBooks, createBook, getBook, updateBook, deleteBook, searchBooks };