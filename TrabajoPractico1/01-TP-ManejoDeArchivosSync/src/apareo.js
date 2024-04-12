/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    let nuevoArray = [... new Set(arrA.concat(arrB).sort((a, b) =>a - b))];
    // *****los corchetes [...new Set] hacen transforman el set en array¿? *****
    return nuevoArray
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    let nuevoArray = arrs.flat();
    nuevoArray = [...new Set(nuevoArray)].sort((a,b) => a - b)
    // *****los corchetes [...new Set] hacen transforman el set en array¿? *****

    return nuevoArray;
}

// exportar ambas funciones