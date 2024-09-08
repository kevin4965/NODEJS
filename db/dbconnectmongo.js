// Importa el módulo 'mongoose' que es necesario para conectar con MongoDB
const mongoose = require('mongoose');

// Define una función asíncrona para establecer la conexión con la base de datos
const getConection = async () => {
    try {
        // Define la URL de conexión a MongoDB Atlas, incluyendo las credenciales y opciones necesarias
        const url = 'mongodb+srv://kevin4965:cEWxzODUoMN27l8O@cluster0.ljxly.mongodb.net/mydatabase?retryWrites=true&w=majority';

        // Intenta conectar con la base de datos utilizando la URL definida
        await mongoose.connect(url);

        // Si la conexión es exitosa, muestra un mensaje en la consola
        console.log('Conexión exitosa');
    } catch (error) {
        // Si ocurre un error al conectar, muestra el mensaje de error en la consola
        console.error('Error al conectar con la base de datos:', error);
    }
};

// Exporta la función getConection para que pueda ser utilizada en otros archivos
module.exports = { getConection };




