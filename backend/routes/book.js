const express = require('express');
const router = express.Router();

const { getBooks, createBook, getBook, updateBook, deleteBook, searchBooks } = require('../controllers/book');

router.get("/", getBooks);
router.post("/", createBook);
router.get("/:id", getBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.get("/search", searchBooks);

module.exports = router;