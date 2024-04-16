const {leerArchivoComoString} = require('./src/utils/fileUtils.js');
const {transformarStringEnArrayDeNumeros} = require('./src/utils/');
const {combinarDosArrays} = require('./src/apareo.js');
const {combinarNArrays} = require('./src/apareo.js');

// leo los 4 archivos a memoria
let primerArchivo = leerArchivoComoString("./in/10NumerosOrdenadosEntre1y50(setA).in");
console.log(primerArchivo);

let segundoArchivo = leerArchivoComoString("./in/10NumerosOrdenadosEntre1y50(setB).in");
console.log(segundoArchivo);

let tercerArchivo = leerArchivoComoString("./in/imparesOrdenadosEntre1y999.in");
console.log(tercerArchivo);

let cuartoArchivo = leerArchivoComoString("./in/paresOrdenadosEntre2y1000.in");
console.log(cuartoArchivo);

// preparo los 4 arrays a partir de los archivo leidos
let primerArray = transformarStringEnArrayDeNumeros(primerArchivo);
console.log(primerArray);

let segundoArray = transformarStringEnArrayDeNumeros(segundoArchivo);
console.log(segundoArray);

let tercerArray = transformarStringEnArrayDeNumeros(tercerArchivo);
console.log(tercerArray);

let cuartoArray = transformarStringEnArrayDeNumeros(cuartoArchivo);
console.log(cuartoArray);


// combino los primeros dos arrays

let dosArrayCombinados = combinarDosArrays(primerArray, segundoArray);
console.log(dosArrayCombinados);

// combino los cuatro arrays

let arraysCombinados = combinarNArrays([primerArray, segundoArray, tercerArray, cuartoArray]);
console.log(arraysCombinados);
