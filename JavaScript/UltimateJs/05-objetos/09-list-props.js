const punto = {
  x: 10,
  y: 15,
  // dibujar: function () { es otra forma de hacerlo jsjs
  dibujar() {
    console.log("dibujando");
  },
};
delete punto.dibujar;
//¿Existe una propiedad en punto que se llame 'dibujar'?
if ("dibujar" in punto) {
  // el in solicita el contenido
  punto.dibujar(); //no se muestra porque no se encuentra!
}
// así verificamos si existe un método o propiedad en particular

// consulta de propiedades
// let keys = Object.keys(punto); // otra forma de escribirlo
//console.log(Object.keys(punto));
for (let llave of Object.keys(punto)) {
  // el of solicita el índice
  console.log(llave, punto[llave]);
}
for (let entry of Object.entries(punto)) {
  console.log(entry);
}
// ambas funciones retornan lo mismo, pero la primera como par
// la segunda como array, una a una, de cada propiedad

// la versión nueva, moderna, es esta:
for (let llave in punto) {
  console.log(llave, punto[llave]);
}
// equivalente a las dos anteriores
