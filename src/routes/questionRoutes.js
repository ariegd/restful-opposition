const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// GET all questions
router.get('/questions', questionController.getAllQuestions);

// GET a single question by ID
router.get('/questions/:id', questionController.getQuestionById);

// POST a new question
router.post('/questions', questionController.createQuestion);

// PUT to update a question by ID
router.put('/questions/:id', questionController.updateQuestion);

// DELETE a question by ID
router.delete('/questions/:id', questionController.deleteQuestion);

// GET questions by materia
router.get('/questions/materia/:materia', questionController.getQuestionsByMateria);

// GET questions by programa
router.get('/questions/programa/:programa', questionController.getQuestionsByPrograma);

module.exports = router;
