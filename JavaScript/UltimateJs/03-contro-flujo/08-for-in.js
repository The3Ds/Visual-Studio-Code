/**
 *  ¿Cuándo usar cuál?
        Usa for...in para iterar sobre las propiedades de objetos.
        Usa for...of para iterar sobre los valores de arreglos o colecciones iterables.
 */





// For...in
console.log("For...in");

let user = {
    id: 1,
    name: 'Chanchito feliz',
    age:  25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}

// For...of
console.log("For...of");
const arreglo = [10, 20, 30];
for (let valor of arreglo) {
    console.log(`Valor: ${valor}`);
}

const texto = "Hola";
for (let letra of texto) {
    console.log(letra);
}

const mapa = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
for (let [llave, valor] of mapa) {
    console.log(`Llave: ${llave}, Valor: ${valor}`);
}
