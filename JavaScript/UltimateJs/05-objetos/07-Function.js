// si quiero añadir propiedades de otro objeto, como el de abajo:
function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando...");
  };
}

// puedo extender el objeto nuevo que estoy creando mediante esta forma:
let punto = { z: 7 };
console.log(punto);
//Punto.call(punto, 1, 2); // Primera, y su forma de escribirlo
Punto.apply(punto, [1, 2]); // Segunda, y su forma de escribirlo
// cualquiera es válida, son lo mismo
console.log(punto);








//No utilizar
//Es mera referencia por si un loco la usa
// const Point = new Function(
//   "x",
//   "y",
//   `
// this.x = x;
// this.y = y;
// this.dibujar = function() {console.log("Dibujando...");};
// `
// );
// const p = new Point(1, 2);
// console.log(p);