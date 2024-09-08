//Permitirá registrar y editar los géneros de películas para la Aplicación Web. Se tendrán
//inicialmente: acción, aventura, ciencia ficción, drama y terror. Pero se podrán agregar los que
//se deseen a medida que se necesiten. Los directivos piden que una película o serie, etc., se
//clasifique en un único género, por ahora. Se guardará la siguiente información:
//Nombre
//Estado (Activo o Inactivo)
//Fecha creación
//Fecha actualización
//Descripción

const { Schema, model } = require('mongoose'); // Importa los módulos 'Schema' y 'model' desde 'mongoose'

// Define el esquema para el modelo de "Genero"
const GeneroSchema = Schema({
    // Nombre del genero, con valores permitidos especificados en el enum
    nombre: {
        type: String,
        required: true,
        enum: ['acción', 'aventura', 'ciencia ficción', 'drama','terror'] // Enum para limitar los valores posibles

    },
    // Estado del género, con valores permitidos especificados en el enum
    estado: {
        type: String,
        required: true,
        enum: ['activo', 'inactivo'] // Enum para limitar los valores posibles
    },
    // Fecha de creación del registro
    fecha_creacion: {
        type: Date,
        required: true,
        default: Date.now // Asigna la fecha actual por defecto
    },
    // Fecha de la última actualización del registro
    fecha_actualizacion: {
        type: Date,
        required: true,
        default: Date.now // Asigna la fecha actual por defecto
    },
    // Descripción del género
    descripcion: {
        type: String,
        required: true
    }
});

// Exporta el modelo 'Genero' basado en el esquema definido
module.exports = model('Genero', GeneroSchema);
