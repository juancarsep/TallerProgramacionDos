import fs from 'fs';
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    let data = fs.readFile(ruta,'utf-8', (err, data) =>{
        if(err){
            console.log(`Error al leer el archivo: \n
             ${err.message}`);
        }else{
            return data;
        }
    }) 
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    fs.writeFile(ruta, texto, (err) => {
        if(err){
            console.log("Error al escribir en el archivo");
        }else{
            console.log("Se ha escrito en el archivo correctamente");
        }
    })
}

// exportar ambas funciones

module.exports = {
    leerArchivoComoString : leerArchivoComoString(),
    escribirTextoEnArchivo : escribirTextoEnArchivo()
}