const mongoose = require('mongoose');

const questionBookSchema = new mongoose.Schema({
    books_id: { type: String, required: true },
    guía: { type: String, required: true },
    título_c: { type: String, required: true }, 
    capítulo: { type: Number, required: true }, 
    título_a: { type: String, required: true }, 
    apartado: { type: Decimal128, required: true }, 
    pregunta: { type: String, required: true },
    opciones: { type: [String], required: true },
    respuesta: { type: Number, required: true },
    página: { type: Number, required: true }, 
}, { timestamps: true });

module.exports = mongoose.model('QuestionBook', questionBookSchema);
