const QuestionBook = require('../models/questionBookModel');

// GET all QuestionBooks
exports.getAllQuestionBooks = async (req, res) => {
    try {
        const questions_books = await QuestionBook.find();
        res.status(200).json(questions_books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET a single QuestionBook by ID
exports.getQuestionBookById = async (req, res) => {
    try {
        const question_book = await QuestionBook.findById(req.params.id);
        if (!question_book) return res.status(404).json({ message: 'QuestionBook not found' });
        res.status(200).json(question_book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET QuestionBooks by materia
/* exports.getQuestionBooksByMateria = async (req, res) => {
    try {
        const { materia } = req.params; // Use req.params to get the materia value
        const limit = parseInt(req.query.limit) || 0; // Get the limit from query, default to 0 (no limit)
        const random = req.query.random === 'true'; // Check if randomization is requested

        if (!materia) {
            return res.status(400).json({ error: 'Materia parameter is required' });
        }

        let QuestionBooks;
        if (random) {
            // Use aggregation with $match and $sample for random selection
            QuestionBooks = await QuestionBook.aggregate([
                { $match: { materia } },
                { $sample: { size: limit || 5 } } // Default to 5 if no limit is provided
            ]);
        } else {
            // Regular query with optional limit
            QuestionBooks = await QuestionBook.find({ materia }).limit(limit);
        }

        res.status(200).json(QuestionBooks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
 */
// GET QuestionBooks by programa
/* exports.getQuestionBooksByPrograma = async (req, res) => {
    try {
        const { programa } = req.params; // Use req.params to get the programa value
        const limit = parseInt(req.query.limit) || 0; // Get the limit from query, default to 0 (no limit)
        const random = req.query.random === 'true'; // Check if randomization is requested

        if (!programa) {
            return res.status(400).json({ error: 'Programa parameter is required' });
        }

        let QuestionBooks;
        if (random) {
            // Use aggregation with $match and $sample for random selection
            QuestionBooks = await QuestionBook.aggregate([
                { $match: { programa } },
                { $sample: { size: limit || 5 } } // Default to 5 if no limit is provided
            ]);
        } else {
            // Regular query with optional limit
            QuestionBooks = await QuestionBook.find({ programa }).limit(limit);
        }

        res.status(200).json(QuestionBooks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; */

// GET QuestionBooks by examen
/* exports.getQuestionBooksByExamen = async (req, res) => {
    try {
        const { examen } = req.params; // Use req.params to get the examen value
        const limit = parseInt(req.query.limit) || 0; // Get the limit from query, default to 0 (no limit)
        const random = req.query.random === 'true'; // Check if randomization is requested

        if (!examen) {
            return res.status(400).json({ error: 'Examen parameter is required' });
        }

        let QuestionBooks;
        if (random) {
            // Use aggregation with $match and $sample for random selection
            QuestionBooks = await QuestionBook.aggregate([
                { $match: { examen } },
                { $sample: { size: limit || 5 } } // Default to 5 if no limit is provided
            ]);
        } else {
            // Regular query with optional limit
            QuestionBooks = await QuestionBook.find({ examen }).limit(limit);
        }

        res.status(200).json(QuestionBooks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
 */
// POST a new QuestionBook
exports.createQuestionBook = async (req, res) => {
    try {
        const new_question_book = new QuestionBook(req.body);
        const saved_question_book = await new_question_book.save();
        res.status(201).json(saved_question_book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// PUT to update a QuestionBook by ID
exports.updateQuestionBook = async (req, res) => {
    try {
        const updated_question_book = await QuestionBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated_question_book) return res.status(404).json({ message: 'QuestionBook not found' });
        res.status(200).json(updated_question_book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE a QuestionBook by ID
exports.deleteQuestionBook = async (req, res) => {
    try {
        const deleted_question_book = await QuestionBook.findByIdAndDelete(req.params.id);
        if (!deleted_question_book) return res.status(404).json({ message: 'QuestionBook not found' });
        res.status(200).json({ message: 'QuestionBook deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
