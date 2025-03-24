const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    ingreso: { type: String, required: true },
    programa: { type: String, required: true }, // ag (government administration), tb (basic technology) , sd (systems development), sc (systems and communications)
    materia: { type: String, required: true }, // net, html, sql, jakarta, css, etc
    pregunta: { type: String, required: true },
    opciones: { type: [String], required: true }, // Array of strings for options
    respuesta: { type: Number, required: true }, // Integer for the correct answer index
    examen: { type: String, required: true },
    numero: { type: Number, required: true }, // Integer for the question number
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
