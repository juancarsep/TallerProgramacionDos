/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {

    let nuevoArray = str.split(separador);
    return nuevoArray;

}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    let nuevoString = "";
    for(let i = 0; i < arr.length; i ++){
        nuevoString.concat(arr[i]).concat(separador);
    }

    return nuevoString;
}

// exportar ambas funciones
module.exports = {
    transformarStringEnArrayDeNumeros : transformarStringEnArrayDeNumeros(),
    transformarArrayDeNumerosAUnSoloString : transformarArrayDeNumerosAUnSoloString()
}