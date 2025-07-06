const express = require('express');
const router = express.Router();
const qBookController = require('../controllers/qBookController');

// GET all questions
router.get('/qbooks', qBookController.getAllQBooks);

// GET a single question by ID
router.get('/qbooks/:id', qBookController.getQBookById);

// POST a new question
/*router.post('/qbooks', questionBookController.createQuestionBook);

// PUT to update a question by ID
router.put('/qbooks/:id', questionBookController.updateQuestionBook);

// DELETE a question by ID
router.delete('/qbooks/:id', questionBookController.deleteQuestionBook);

// GET questions by materia
 router.get('/qbooks/materia/:materia', questionController.getQuestionsByMateria);

// GET questions by programa
router.get('/qbooks/programa/:programa', questionController.getQuestionsByPrograma);
 
// GET questions by examen
router.get('/qbooks/examen/:examen', questionController.getQuestionsByExamen);
*/
module.exports = router;
