const servicio = require('../service/libros.js');

const obtenerLibros = (req, res) => {

    const libros = servicio.obtenerLibros(id);
    res.json(libros);
}

const obtenerLibro = (req, res) => {
    const {id} = req.params;
    const libro = servicio.obtenerLibro(id);
    res.json(libro);
}

const guardarLibro = (req, res) => {
    const { libro } = req.body;
    servicio.guardarLibro(libro);
    res.json(libro);
}

const actualizarLibro = (req, res) => {
    const { id } = req.params;
    const libro = req.body;
    const libroActualizado = servicio.actualizarLibro(id, libro);
    res.json(libroActualizado);
}

const borrarLibro = (req, res) => {
    const { id } = req.params;
    const libro = req.body;
    const libroEliminado = servicio.borrarLibro(id, libro);
}

module.exports = {
    obtenerLibros,
    obtenerLibro,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}