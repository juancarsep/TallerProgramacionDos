const servicio = require('../service/libros.js');

const obtenerLibros = (req, res) => {
    let libros;
    const { id } = req.params;
    libros = servicio.obtenerLibros(id);
    res.json(libros);
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
    const libroEliminado = servicio.borrarLibro(id);
    res.json(libroEliminado);
}

module.exports = {
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}