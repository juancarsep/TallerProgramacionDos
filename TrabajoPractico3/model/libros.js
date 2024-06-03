const libros = [
    {
        id: 1,
        "titulo": "One Piece",
        "autor": "Oda",
        "año": 1999
    },
    {
        id: 2,
        "titulo": "Black Clover",
        "autor": "Anonimo",
        "año": 2015
    },
    {
        id: 3,
        "titulo": "Naruto",
        "autor": "Kishimoto",
        "año": 1989
    },
    {
        id: 1,
        "titulo": "Dragon Ball",
        "autor": "Toriyama",
        "año": 1988
    },
]

const obtenerLibro = id => {
    if (id) {
        const libro = libros.find(libro => libro.id = id);
        return libro || {};
    } else {
        return libros
    }
}

const guardarLibro = libro => {
    libros.push(libro)
    return libro;
}

const actualizarLibro = (id, libro) =>{

    const index = libros.findIndex(libro => libro.id === id);

    if(index != -1){

        const libroAnt = libros[index];
        const libroAct = {... libroAnt, ... libro};
        libros.splice(index, 1, libroAct);
        return libroAct;

    }else{
        return {};
    }
}