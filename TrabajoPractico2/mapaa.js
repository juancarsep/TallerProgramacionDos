const fs = require('fs');

const contenidoStr = require('./maptc');
const contenidoObj = require('./maptc');
const sizeArchivo = require('./maptc');
const escribirArchivo = require('./maptc');

async function funcionGeneral(archivoALeer, archivoAEscribir){

    try{
        let contenidoStr = await contenidoStr(archivoALeer);
        let contenidoObj = await contenidoObj(archivoALeer);
        let sizeArchivo = await contenidoStr.sizeArchivo(archivoALeer);

        let info = {
            'ContenidoStr' : contenidoStr,
            'ContenidoObj' : contenidoObj,
            'Size' : sizeArchivo
        }

        await escribirArchivo(archivoAEscribir, info);

    }catch(error){
        console.log("Ocurrió un error durante el proceso");
    }

}