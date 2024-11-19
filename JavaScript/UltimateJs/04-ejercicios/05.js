/**
 *
 * Crear algoritmo que devuelva número
 * menor y mayor de un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  let menor = arr[0];
  let mayor = arr[0];

  // Primera solución
  // for (let i = 0; i < arr.length; i++) {
  //   if (menor > arr[i + 1]) {
  //     menor = arr[i + 1];
  //   }
  //   if (mayor < arr[i + 1]) {
  //     mayor = arr[i + 1];
  //   }
  // }

  

  // Óptima
  for (numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }




  return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);
