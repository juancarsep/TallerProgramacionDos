const express = require('express');
const router = require('./router/libros')
const app = express();
const PORT = 8080;
app.use(express.json());
app.use('/libros', router)





const server = app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
server.on('error', () => console.log(`Error en el servidor: ${error.message}`));