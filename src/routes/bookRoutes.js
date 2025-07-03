const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET all books
router.get('/books', bookController.getAllBooks);

// GET a single book by ID
router.get('/books/:id', bookController.getBookById);

// POST a new book
router.post('/books', bookController.createBook);

// PUT to update a book by ID
router.put('/books/:id', bookController.updateBook);

// DELETE a book by ID
router.delete('/books/:id', bookController.deleteBook);

// Save book score
router.post('/books/score', bookController.saveBookScore);

module.exports = router;