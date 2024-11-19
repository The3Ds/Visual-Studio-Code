/**
 *  algoritmo que imprima solo los números impares (0 al 10)
 *  por medio de un loop
 */

for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log('Número impar', i);
    }
}
console.log('Fuera del for');


let i = 0;
while ( i < 10) {
    if (i % 2 !== 0) {
        console.log('Número impar', i);
    }
    i++;
}

console.log('Fuera del while');
