//Permitirá registrar y editar la productora principal de la producción (Disney, Warner,
//  Paramount, MGM, …). Se guardará la siguiente información para este módulo:
//I. Nombre de la productora
//II. Estado (Activo o Inactivo)
//III. Fecha de creación
//IV. Fecha de actualización
//V. Slogan
//VI. Descripción


const { Schema, model } = require('mongoose'); // Importa los módulos 'Schema' y 'model' desde 'mongoose'

// Define el esquema para el modelo de "Productora"
const ProductoraSchema = Schema({
    // Nombre de la productora
    nombredelaProductora: {
        type: String,
        required: true
    },
    // Estado de la productora, con valores permitidos especificados en el enum
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
    },
    // Slogan de la productora
    slogan: {
        type: String,
        required: true
    },
    // Descripción de la productora
    descripcion: {
        type: String,
        required: true
    }
});

// Exporta el modelo 'Productora' basado en el esquema definido
module.exports = model('Productora', ProductoraSchema);


