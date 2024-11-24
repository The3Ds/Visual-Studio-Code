/**
 *  Todo objeto que creamos pasan por el constructor de objetos
 *  el constructor por defecto es -> f Object() { [Native code] }
 *
 *  podemos crear objetos utilizando su propio constructor:
 *  let objeto2 = new Object();
 */

let obj = {};
let obj2 = new Object();
/** Constructores:
 *  new Array(); []
 *  new String(); "" '' ´´
 *  new Number(); 1234
 *  new Boolean(); true / false
 */

function Usuario() {
  this.name = "Chanchito feliz";
}
let user = new Usuario();
console.log(user.constructor);
// me muestra el constructor Usuario

/**
 *  Si preguntamos el typeof de un constructor,
 *  refiriendome a los ejemplos que puse arriba,
 *  siempre me devolverá el método object
 */

// posibles errores que se pueden presentar
const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1, s2);
// independientemente de cual use, siempre podré
// hacer operaciones de strings, pero si
// evaluamos el contenido...
// el segundo se queda igual, sin comportamiento
console.log(eval(s1), eval(s2));
// si requiero recuperar su valor, puedo recurrir
// a su propiedad ->.valueOf()
console.log(eval(s1), s2.valueOf());
// y, ahora si, realizar operación
console.log(eval(s1), eval(s2.valueOf()));


// Todo esto aplica a los constructores vistos anteriormente