const QBook = require('../models/qBookModel');

// GET all QBooks
exports.getAllQBooks = async (req, res) => {
    try {
        const qbooks = await QBook.find();
        res.status(200).json(qbooks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET a single QBook by ID
exports.getQBookById = async (req, res) => {
    try {
        const qbook = await QBook.findById(req.params.id);
        if (!qbook) return res.status(404).json({ message: 'QBook not found' });
        res.status(200).json(qbook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET QBooks by books_id
exports.getQBooksByIdBook = async (req, res) => {
    try {
        const qbooks = await QBook.find({ books_id: req.params.bookId });
        res.json(qbooks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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
// POST a new QBook
/*
exports.createQBook = async (req, res) => {
    try {
        const newQBook = new QBook(req.body);
        const savedQBook = await newQBook.save();
        res.status(201).json(savedQBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// PUT to update a QBook by ID
exports.updateQBook = async (req, res) => {
    try {
        const updatedQBook = await QBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedQBook) return res.status(404).json({ message: 'QBook not found' });
        res.status(200).json(updatedQBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE a QBook by ID
exports.deleteQBook = async (req, res) => {
    try {
        const deletedQBook = await QBook.findByIdAndDelete(req.params.id);
        if (!deletedQBook) return res.status(404).json({ message: 'QBook not found' });
        res.status(200).json({ message: 'QBook deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
*/