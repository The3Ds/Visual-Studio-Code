/**
 *  Crear algoritmo que devuelva cantidad
 *  de números positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
  let positivo = 0;
  for (numero of arr) {
    // Primera versión - solución
    // if (numero > 0) {
    //   positivo++;
    // }

    // Segunda versión - Óptimo
    positivo = numero > 0 ? ++positivo : positivo;
  }
  return positivo;
}
let resultado = cuantosPositivos(array);
console.log(resultado);
