const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionBookController');

// GET all questions
router.get('/qbooks', questionController.getAllQuestionBooks);

// GET a single question by ID
router.get('/qbooks/:id', questionController.getQuestionBookById);

// POST a new question
router.post('/qbooks', questionController.createQuestionBook);

// PUT to update a question by ID
router.put('/qbooks/:id', questionController.updateQuestionBook);

// DELETE a question by ID
router.delete('/qbooks/:id', questionController.deleteQuestionBook);

// GET questions by materia
/* router.get('/qbooks/materia/:materia', questionController.getQuestionsByMateria);

// GET questions by programa
router.get('/qbooks/programa/:programa', questionController.getQuestionsByPrograma);
 
// GET questions by examen
router.get('/qbooks/examen/:examen', questionController.getQuestionsByExamen);
*/
module.exports = router;
