const model = require('../model/libros');

const obtenerLibros = () => {

    const libros = model.obtenerLibros();
    return libros || {};

}

const obtenerLibro = id => {
    const libro = model.obtenerLibro(id);
    return libro;
}


const guardarLibro = libro => {
    model.guardarLibro(libro);
    return libro;
}

const actualizarLibro = (id, libro) => {
    const libroActualizado = model.actualizarLibro(id, libro);
    return libroActualizado;
}

const borrarLibro = (id, libro) => {
    model.eliminarLibro(id, libro);

}

module.exports = {
    obtenerLibros,
    obtenerLibro,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}
