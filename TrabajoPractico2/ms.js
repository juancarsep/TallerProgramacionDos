const fs = require('fs')

try {

    //Obtener contenido como STR

    let contenidoStr = fs.readFileSync('package.json', 'utf-8').toString;



    //Obtener contenido como Obj

    let contenidoObj = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
    

    //Obtener el peso del archivo

    let size = fs.statSync('ms.txt').size;


    let info = {
        contenidoStr : contenidoStr,
        contenidoObj : contenidoObj,
        size : size
    }

    console.log(info);

    fs.writeFileSync('package.json', info);

} catch (error) {
    console.log('Nada funcionó, hubo un error');
} finally {
    console.log('Fin del programa');
}