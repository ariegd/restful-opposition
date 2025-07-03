const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    paginas: { type: Number, required: true },
    publicado: { type: Number, required: true },
    autores: { type: [String], required: true }, // Array of strings for
    asignatura: { type: String, required: true },
    materia: { type: String, required: true },
    curso: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
