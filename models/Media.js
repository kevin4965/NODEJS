//Este módulo se encargará de gestionar (agregado, edición, borrado, consulta) las
//producciones (películas y series, por ahora). Para este, se almacenará la siguiente
//información:
//I. Serial: único
//II. Titulo
//III. Sinopsis
//IV. URL de la película: único
//V. Imagen o foto de portada
//VI. Fecha de creación
//VII. Fecha de actualización
//VIII. Año de estreno
//X. Género principal: Para agregar la película el sistema permite seleccionar solo géneros
//activos definidos en el Módulo de Género
//X. Director principal: Para agregar la película el sistema permite seleccionar solo
//directores activos definidos en el Módulo de Director
//XI. Productora: Para agregar la película el sistema permite seleccionar solo productoras
//activas definidas en el Módulo de Productora
//XII. Tipo: Para agregar la película el sistema permite seleccionar solo tipos definidos en
//el Módulo de Tipo

const { Schema, model } = require('mongoose'); // Importa los módulos 'Schema' y 'model' desde 'mongoose'

// Define el esquema para el modelo de "Producción"
const MediaSchema = Schema({
    // Serial único para identificar cada producción
    serial: {
        type: String,
        required: true,
        unique: true // Asegura que cada serial sea único
    },
    // Título de la producción
    titulo: {
        type: String,
        required: true
    },
    // Sinopsis de la producción
    sinopsis: {
        type: String,
        required: true
    },
    // URL única para la producción (por ejemplo, para streaming o descarga)
    url: {
        type: String,
        required: true,
        unique: true // Asegura que cada URL sea única
    },
    // Imagen o foto de portada de la producción
    imagen: {
        type: String // Puede ser una URL o una ruta local
    },
    // Fecha de creación del registro de la producción
    fecha_creacion: {
        type: Date,
        required: true
    },
    // Fecha de la última actualización del registro de la producción
    fecha_actualizacion: {
        type: Date,
        required: true
    },
    // Año en que se estrenó la producción
    ano_estreno: {
        type: Number, // Usualmente un número entero para el año
        required: true
    },
    // Género principal de la producción; debe ser uno de los géneros activos definidos en el módulo de Género
    genero_principal: {
        type: Schema.Types.ObjectId, // Referencia a un documento en la colección de géneros
        ref: 'GeneroSchema', // Nombre del modelo de género
        required: true
    },
    // Director principal de la producción; debe ser uno de los directores activos definidos en el módulo de Director
    director_principal: {
        type: Schema.Types.ObjectId, // Referencia a un documento en la colección de directores
        ref: 'DirectorSchema', // Nombre del modelo de director
        required: true
    },
    // Productora de la producción; debe ser una de las productoras activas definidas en el módulo de Productora
    productora: {
        type: Schema.Types.ObjectId, // Referencia a un documento en la colección de productoras
        ref: 'ProductoraSchema', // Nombre del modelo de productora
        required: true
    },
    // Tipo de la producción (por ejemplo, película o serie); debe ser uno de los tipos definidos en el módulo de Tipo
    tipo: {
        type: Schema.Types.ObjectId, // Referencia a un documento en la colección de tipos
        ref: 'TipoSchema', // Nombre del modelo de tipo
        required: true
    }
});

// Exporta el modelo 'Produccion' basado en el esquema definido
module.exports = model('MediaSchema', ProduccionSchema);
