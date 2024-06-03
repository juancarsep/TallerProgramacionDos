const express = require('express');
const app = express();
const PORT = 8080;

//GET
app.get('/libros/:id?', (req, res) => {
    const {id} = req.params;

    if(id){
        const libro = libros.find(libro => libro.id = id);
        res.json(libro || {});
    }else{
        res.json(libros);
    }
})

//POST
app.post('/libros', (req, res) => {
    const libro = req.body;
    libros.push(libro);
    res.json(libro);
})

//PUT
app.put('/libros/:id', (req, res) => {
    const {id} = req.params;
    const libro = req.body;

    const index = libros.findIndex(libro => libro.id === id);
    if(index != -1){
        const libroAnt = libros[index];
        const libroAct = {... libroAnt, ... libro};
        libros.splice(index, 1, libroAct);
        res.json(libroAct);
    }else{
        res.json({});
    }
})

//DELETE
app.delete('/libros/:id', (req, res) => {
    const {id} = req.params;
    const libro = req.body;

    const index = libros.findIndex(libro => libro.id === id);
    if(index != -1){
        libros.splice(index, 1, libro);
    }

    res.json(libro);

})















const server = app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
server.on('error', () => console.log(`Error en el servidor: ${error.message}`));