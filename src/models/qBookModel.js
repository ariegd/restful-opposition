const mongoose = require('mongoose');

const qBookSchema = new mongoose.Schema({
    books_id: { type: String, required: true },
    guia: { type: String, required: true },
    titulo_c: { type: String, required: true }, 
    capitulo: { type: Number, required: true }, 
    titulo_a: { type: String, required: true }, 
    apartado: { type: String, required: true }, 
    pregunta: { type: String, required: true },
    opciones: { type: [String], required: true },
    respuesta: { type: Number, required: true },
    pagina: { type: Number, required: true }, 
}, { timestamps: true });

module.exports = mongoose.model('QBook', qBookSchema);
