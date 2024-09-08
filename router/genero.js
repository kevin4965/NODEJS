const { Router } = require('express'); // Importa el enrutador de Express
const Genero = require('../models/Genero'); // Importa el modelo 'Genero'
const { validationResult, check } = require('express-validator'); // Importa funciones de validación de 'express-validator'

const router = Router(); // Crea una instancia del enrutador

// Listar todos los géneros
router.get('/', async function (req, res) {
    try {
        const generos = await Genero.find(); // Busca todos los géneros en la base de datos
        res.json(generos); // Envía los géneros como respuesta en formato JSON
    } catch (error) {
        console.log(error); // Imprime el error en consola para depuración
        res.status(500).send('Ocurrió un error al listar los géneros'); // Envía un error 500 si algo falla
    }
});

// Crear un nuevo género
router.post('/', [
    check('nombre', 'El campo nombre no puede estar vacío').not().isEmpty(), // Valida que 'nombre' no esté vacío
    check('estado', 'El estado debe ser "activo" o "inactivo"').isIn(['activo', 'inactivo']), // Valida que 'estado' esté entre los valores permitidos
], async function (req, res) {
    try {
        const errors = validationResult(req); // Verifica si hay errores de validación
        if (!errors.isEmpty()) {
            return res.status(400).json({ mensaje: errors.array() }); // Si hay errores, envía una respuesta con los errores
        }

        // Crea un nuevo género basado en los datos del cuerpo de la solicitud
        const genero = new Genero(req.body);
        await genero.save(); // Guarda el nuevo género en la base de datos

        res.status(201).json({ mensaje: 'Género creado exitosamente', genero }); // Envía una respuesta exitosa
    } catch (error) {
        console.log(error); // Imprime el error en consola para depuración
        res.status(500).send('Ocurrió un error al crear el género'); // Envía un error 500 si algo falla
    }
});

// Actualizar género - PUT METHOD
router.put('/:generoId', [
    check('nombre', 'El campo nombre no puede estar vacío').not().isEmpty(), // Valida que 'nombre' no esté vacío
    check('estado', 'El estado debe ser "activo" o "inactivo"').isIn(['activo', 'inactivo']), // Valida que 'estado' esté entre los valores permitidos
], async function (req, res) {
    try {
        const errors = validationResult(req); // Verifica si hay errores de validación
        if (!errors.isEmpty()) {
            return res.status(400).json({ mensaje: errors.array() }); // Si hay errores, envía una respuesta con los errores
        }

        let genero = await Genero.findById(req.params.generoId); // Busca el género por ID
        if (!genero) {
            return res.status(404).send('El género no existe'); // Devuelve error si no encuentra el género
        }

        // Actualiza los campos del género
        genero.nombre = req.body.nombre;
        genero.estado = req.body.estado;
        genero.fecha_actualizacion = Date.now(); // Actualiza la fecha de actualización
        genero.descripcion = req.body.descripcion;

        await genero.save(); // Guarda los cambios en la base de datos

        res.status(200).json({ mensaje: 'Género actualizado exitosamente', genero }); // Envía una respuesta exitosa
    } catch (error) {
        console.log(error); // Imprime el error en consola para depuración
        res.status(500).send('Ocurrió un error al actualizar el género'); // Envía un error 500 si algo falla
    }
});

module.exports = router; // Exporta el enrutador para usarlo en la aplicación principal
