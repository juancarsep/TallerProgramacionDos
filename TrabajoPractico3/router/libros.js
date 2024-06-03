const express = require('express');
const controlador = require('../controller/libros');

const router = express.Router();

router.get('/', controlador.obtenerLibros);
router.get('/:id?', controlador.obtenerLibro);
router.post('/', controlador.guardarLibro);
router.put('/:id', controlador.actualizarLibro);
router.get('/:id', controlador.borrarLibro);



module.exports = router;