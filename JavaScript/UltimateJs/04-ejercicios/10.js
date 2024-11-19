/**
 *  Crear array de longitud N, y que sus elementos
 *  sean números de 1 hasta N.
 */

let longitud = 7;
function crearArray(n) {
  if (n <= 0) {
    return "No se acepta el valor cero o menores";
    //break;
  }

  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = i + 1;
  }
  return array;
}

let resultado = crearArray(longitud);
console.log(resultado);
