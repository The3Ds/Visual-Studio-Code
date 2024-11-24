// verificación con variables
let a = 1;
let b = a;
// aumentamos
b++;
console.log(a, b);
// no hay alteración a la de referencia
// ------------------------------------------------
// verificamos con objetos
let c = {};
let d = c;
// definimos valor
d.prop = 1;
console.log(c, d);
// se altera la referencia debido a ser una dirección
// ------------------------------------------------
// veamos con funciones
let e = 1;
function suma(n) {
  n++;
}
// llamamos a la función
suma(a);
console.log(a);
// la variable no cambia!
// la función modifica su propia variable (n) almacenada

// veamos como sería la versión correcta de este método
let f = { prop: 1 };
// al definir una propiedad, la función altera la propiedad
function suma(m) {
  m.prop++;
}
// llamamos a la función
suma(f);
console.log(f);
// se puede visualizar el incremento
// debido a la referencia
