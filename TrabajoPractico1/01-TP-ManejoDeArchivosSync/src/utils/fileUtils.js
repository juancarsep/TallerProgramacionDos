import fs from 'fs';
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
export function leerArchivoComoString(ruta) {
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

    if(fs.existsSync(ruta)){
        fs.appendFileSync(ruta, texto, (data,error) => {
            if(error){
                console.log("Hubo un error al agregar contenido al archivo");
            }else{
                console.log("Se agregó el contenido exitosamente.");
            }
        });
    }else{
        if(shouldCreateIfNotExists){
            fs.writeFileSync(ruta,texto, (data, error) => {
                if(error){
                    console.log("Error al crear el archivo y agregar contenido");
                }else{
                    console.log("Se creó el archivo y se agregó el contenido exitosamente.")
                }
            });
        }else{
            console.log("El archivo no existe y no se creará");
        }
    }

    
}

// exportar ambas funciones

module.exports = {
    leerArchivoComoString : leerArchivoComoString(),
    escribirTextoEnArchivo : escribirTextoEnArchivo()
}