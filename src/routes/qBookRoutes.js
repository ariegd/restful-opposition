const express = require('express');
const router = express.Router();
const qBookController = require('../controllers/qBookController');

// GET all qBooks
router.get('/qbooks', qBookController.getAllQBooks);

// GET a single qBook by ID
router.get('/qbooks/:id', qBookController.getQBookById);

// GET qBooks by books_id
 router.get('/qbooks/id/:bookId', qBookController.getQBooksByIdBook);

// GET qBooks by books_id and capitulo
router.get('/qbooks/id/:bookId/capitulo/:capitulo', qBookController.getQBooksByIdBookAndCapitulo);

// POST a new question
/*router.post('/qbooks', questionBookController.createQuestionBook);

// PUT to update a question by ID
router.put('/qbooks/:id', questionBookController.updateQuestionBook);

// DELETE a question by ID
router.delete('/qbooks/:id', questionBookController.deleteQuestionBook);

// GET questions by programa
router.get('/qbooks/programa/:programa', questionController.getQuestionsByPrograma);
 
// GET questions by examen
router.get('/qbooks/examen/:examen', questionController.getQuestionsByExamen);
*/
module.exports = router;
