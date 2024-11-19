/**
 *  Indice validar que no sea menor a cero
 *  y que el elemento exista en el array
 */

function getbyIdx(arr, idx) {
    // if (arr[idx] != undefined || arr[idx] >= 0) {
    if (arr.length >= idx && arr[idx] >= 0) {
        return arr[idx];
    }
    return("indice fuera del rango");
}
let resultado = getbyIdx([0,1,2,3,4,5,6,7,8,9], 9);
console.log(resultado);
