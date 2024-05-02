const fs = require('fs')

try {

    //Obtener contenido como STR

    let contenidoStr = fs.readFile('package.json', 'utf-8', (error, data) => {
        if (error) {
            console.log("El archivo no pudo ser leido o no se ha encontrado");
        } else {
            return data.toString();
        }
    })



    //Obtener contenido como Obj

    let contenidoObj = fs.readFile('package.json', 'utf-8', (error, data) => {
        if (error) {
            console.log("El archivo no pudo ser leido o no se ha encontrado");
        } else {
            let dataObj = JSON.parse(data);
            return dataObj;
        }
    })





    let size = fs.stat('package.json', (error, data) => {
        if (error) {
            console.log("Error al obtener información sobre el archivo | Archivo inexistente");
        } else {
            return data.size;
        }
    })

    let info = {
        contenidoStr: contenidoStr,
        contenidoObj: contenidoObj,
        size: size
    }

    console.log(info);


    fs.writeFile('mac.txt', info, (error, data) =>{
        if(error){
            console.log("error al escribir el archivo.")
        }else{
            console.log("el archivo fue escrito con exito")
        }
    })




} catch (error) {
    console.log('Nada funcionó, hubo un error');
} finally {
    console.log('Fin del programa');
}