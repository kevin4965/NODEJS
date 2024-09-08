// Importa el módulo 'express', que se utiliza para crear y gestionar aplicaciones web
const express = require('express');

// Importa la función 'getConection' desde el módulo './db/dbconnectmongo' para conectar con MongoDB
const { getConection } = require('./db/dbconnectmongo');

// Importa 'cors' para habilitar CORS (Cross-Origin Resource Sharing)
const cors = require('cors');

// Carga las variables de entorno desde un archivo '.env'
require('dotenv').config();

// Crea una instancia de la aplicación Express
const app = express();

// Define el puerto en el que el servidor escuchará las solicitudes
const port = process.env.PORT || 3000; // Valor por defecto en caso de que no esté definido el puerto

// Habilita CORS
app.use(cors());

// Llama a la función 'getConection' para establecer la conexión con la base de datos MongoDB
getConection().catch((error) => {
  console.error('Error al conectar con la base de datos:', error);
  process.exit(1); // Finaliza la aplicación si no se puede conectar a la base de datos
});

// Middleware para interpretar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta para manejar las solicitudes relacionadas con el "género"
app.use('/genero', require('./router/genero'));

// Manejo de rutas inexistentes
app.use((req, res) => {
  res.status(404).send('Recurso no encontrado');
});

// Inicia el servidor en el puerto definido
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
