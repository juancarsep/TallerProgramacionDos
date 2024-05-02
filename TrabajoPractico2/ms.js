const fs = require('fs')

try {

    //Obtener contenido como STR

    let contenidoStr = fs.readFileSync('package.json', 'utf-8', (error, data) => {
        if (error) {
            console.log("El archivo no pudo ser leido o no se ha encontrado");
        } else {
            return data.toString();
        }
    })



    //Obtener contenido como Obj

    let contenidoObj = fs.readFileSync('package.json', 'utf-8', (error, data) => {
        if (error) {
            console.log("El archivo no pudo ser leido o no se ha encontrado");
        }else{
            let dataObj =  JSON.parse(data);
            return dataObj;
        }
    })



} catch (error) {
    console.log('Nada funcionó, hubo un error');
} finally {
    console.log('esto se ejecuta igualmente');
}