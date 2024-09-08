//Permitirá registrar los tipos de multimedia, por ahora se tendrán: serie y película, pero se
//podrán gestionar otros deseados a futuro. Se guardará la siguiente información:
//I. Nombre
//II. Fecha de creación
//III. Fecha de actualización
//IV. Descripción


const { Schema, model } = require('mongoose'); // Importa los módulos 'Schema' y 'model' desde 'mongoose'

// Define el esquema para el modelo de "Tipo"
const TipoSchema = Schema({
    // Nombre del tipo, con valores permitidos especificados en el enum
    nombre: {
        type: String,
        required: true,
        enum: ['serie', 'pelicula'] // Enum para limitar los valores posibles
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
    // Descripción del tipo
    descripcion: {
        type: String,
        required: true
    }
});

// Exporta el modelo 'Tipo' basado en el esquema definido
module.exports = model('Tipo', TipoSchema);
