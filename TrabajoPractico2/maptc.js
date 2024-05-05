const fs = require('fs');


function contenidoStr(archivoALeer){
    return new Promise((resolve, reject) => {
        let contenidoStr = fs.readFile(archivoALeer, 'utf-8', (error, data) =>{
            if(error){
                reject(error);
            }else{
                resolve(data.toString);
            }
        })
    })
}


function contenidoObj(archivoALeer){
    return new Promise((resolve, reject) => {
        let contenidoStr = fs.readFile(archivoALeer, 'utf-8', (error, data) =>{
            if(error){
                reject(error);
            }else{
                resolve(JSON.parse(data));
            }
        })
    })
}

function sizeArchivo(archivoALeer){
    return new Promise((resolve, reject) =>{
        let size = fs.stat(archivoALeer, (error, data) =>{
            if(error){
                reject(error);
            }else{
                resolve(data.size);
            }
        })
    })
}

let info = {
    contenidoStr : contenidoStr('package.json'),
    contenidoObj : contenidoObj('package.json'),
    size : sizeArchivo('package.json')
}

function escribirArchivo(archivoAEscribir, textoAEscribir){
    return new Promise((reject, resolve) =>{
        fs.writeFile(archivoAEscribir,textoAEscribir, (error, data) =>{
            if(error){
                reject(error);
            }else{
                resolve();
            }
        })
    })
}


module.exports = {
    'contenidoStr' : contenidoStr(),
    'contenidoObj' : contenidoObj(),
    'sizeArchivo' : sizeArchivo(),
    'escribirArchivo': escribirArchivo()
}