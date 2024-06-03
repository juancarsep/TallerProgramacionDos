const model = require('../model/libros');

const obtenerLibros = id => {
    if(id){
        const libro = model.obtenerLibro(id);
        return libro || {};
    }else{
        const libros = model.obtenerLibros();
        return libros;
    }
}

const guardarLibro = libro =>{
    model.guardarLibro(libro);
    return libro;
}

const actualizarLibro = (id, libro) =>{
    const libroActualizado = model.actualizarLibro(id, libro);
    return libroActualizado;
}

const borrarLibro = id =>{
    const libroEliminado = model.eliminarLibro(id);
    return libroEliminado
}

module.exports = {
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}
