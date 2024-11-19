/**
 *  Crear algoritmo que devuelva un
 *  array de objetos en base a pares
 */

let pairs = [
  [1, { id: 1, name: "Nicolas" }],
  [2, { id: 2, name: "Felipe" }],
  [3, { id: 3, name: "Chanchito" }],
];

/** Primera opción
 *  Aunque el resultado sea el mismo con el óptimo,
 *  hay una diferencia significativa.
 *  Queda referenciado el array original, lo que
 *  significa que si se cambia o modifica el nuevo
 *  generado también lo hará el original.
 */
// function toCollection(arr) {
//   let arrays = [];
//   for (idx in arr) {
//     arrays[idx] = arr[idx][1];
//   }
//   return arrays;
// }

/** Óptimo
 *  En este caso, se genera una copia de cada
 *  línea del array, y se va guardando el
 *  conjunto por medio de un for...in.
 *  No hay conflicto porque se referencia la
 *  copia del array.
 *  Otro punto, si cuenta con id, se modifica
 *  ("actualiza") al valor que estemos asignando,
 *  y si no tiene id se agrega al objeto.
 */
function toCollection(arr) {
  let collection = [];
  for (idx in arr) {
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }
  return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);

// let array = [
//   {
//     id: 1,
//     name: "Nicolas",
//   },
//   {
//     id: 2,
//     name: "Felipe",
//   },
//   {
//     id: 3,
//     name: "Chanchito",
//   },
// ];

// console.log(array);
