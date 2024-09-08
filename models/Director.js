//Permitirá registrar y editar el director principal (solo uno, pues como sabemos, pueden ser
//varios) de la producción. Se necesitará guardar la siguiente información:
//Nombres
//Estado (Activo o Inactivo)
//Fecha de creación
//Fecha de actualización

const { Schema, model } = require('mongoose'); // Importa 'Schema' y 'model' desde 'mongoose'

// Define el esquema para el modelo de "Director"
const DirectorSchema = Schema({
    // Nombre del director
    nombres: {
        type: String,
        required: true
    },
    // Estado del director, con valores permitidos especificados en el enum
    estado: {
        type: String,
        required: true,
        enum: ['activo', 'inactivo'] // Enum para limitar los valores posibles
    },
    // Fecha de creación del registro
    fecha_creacion: {
        type: Date,
        required: true
    },
    // Fecha de la última actualización del registro
    fecha_actualizacion: {
        type: Date,
        required: true
    }
});

// Exporta el modelo 'Director' basado en el esquema definido
module.exports = model('Director', DirectorSchema);
