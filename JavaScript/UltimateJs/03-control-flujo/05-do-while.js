// cuales son los numeros pares

let i = 2;

// en while se evalua primero la condición y luego se realiza la función
while (i < 2) {
    if (i % 2 == 0) {
        console.log('Número par', i);
    }
    i++;
}

// se realiza primero la función y luego se evalua la condición
// do{
//     if (i % 2 == 0) {
//         console.log('Número par', i)
//     }
//     i++;
// } while (i < 2);