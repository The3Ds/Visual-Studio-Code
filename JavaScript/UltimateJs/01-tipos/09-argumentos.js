// la a, o el 5, se llama parámetro por ser de una función
function suma(a, b) {
    console.log(arguments);
    return a + b;
}

// el 5 en suma se llama argumento
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);
