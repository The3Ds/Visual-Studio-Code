/**
 *  A ver, esto es una sopa (sin letras)
 *  ¿Qué esta pasando?
 *  Las funciones son objetos de primera clase
 *  esto significa que tienen propiedades como los objetos y...
 *  (1) Podemos asignarlas a otras variables o constantes.
 *  (2) Podemos pasarlas como argumentos a otras funciones
 *  (3) Podemos retornarlas desde otras funciones
 */

//(1)
function Usuario(nombre) {
  this.nombre = nombre;
}
// corroboramos la función
console.log(Usuario.name); //nombre de la función
console.log(Usuario.length); //cantidad de argumentos que recibe
// pasamos las propiedades
const U = Usuario; 
let user = new U("Nicolas");
console.log(user);

//(2)
function of(Fn, arg) {
    return new Fn(arg);
}
//definimos la función con su nombre y entrada
let user1 = of(Usuario, 'Chanchito');
console.log(user1);

//(3)
function returned() {
    return function() {
        console.log('Hola Mundo');
    }
}
// llamamos y ejecutamos
let saludo = returned();
saludo()
