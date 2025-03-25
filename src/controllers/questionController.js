const Question = require('../models/questionModel');

// GET all questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET a single question by ID
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ message: 'Question not found' });
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET questions by materia
exports.getQuestionsByMateria = async (req, res) => {
    try {
        const { materia } = req.params; // Use req.params to get the materia value
        const limit = parseInt(req.query.limit) || 0; // Get the limit from query, default to 0 (no limit)
        if (!materia) {
            return res.status(400).json({ error: 'Materia parameter is required' });
        }
        const questions = await Question.find({ materia }).limit(limit); // Apply the limit
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET questions by programa
exports.getQuestionsByPrograma = async (req, res) => {
    try {
        const { programa } = req.params; // Use req.params to get the programa value
        const limit = parseInt(req.query.limit) || 0; // Get the limit from query, default to 0 (no limit)
        if (!programa) {
            return res.status(400).json({ error: 'Programa parameter is required' });
        }
        const questions = await Question.find({ programa }).limit(limit); // Apply the limit
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST a new question
exports.createQuestion = async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// PUT to update a question by ID
exports.updateQuestion = async (req, res) => {
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedQuestion) return res.status(404).json({ message: 'Question not found' });
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE a question by ID
exports.deleteQuestion = async (req, res) => {
    try {
        const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        if (!deletedQuestion) return res.status(404).json({ message: 'Question not found' });
        res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
