const express = require('express');
const controlador = require('../controller/libros');

const router = express.Router();

router.get('/libros/:id?', controlador.obtenerLibros);
router.post('/libros', controlador.guardarLibro);
router.put('/libros/:id', controlador.actualizarLibro);
router.get('/libros/:id', controlador.borrarLibro);



module.exports = router;