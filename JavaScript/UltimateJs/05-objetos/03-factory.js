// let user = {
//   id: 1,
//   email: "chanchito@outlook.com",
//   name: "Chanchito",
//   activo: true,
//   recuperarClave: function () {
//     console.log("Recuperando clave...");
//   },
// };

// let user1 = {
//   id: 1,
//   email: "Andy@outlook.com",
//   name: "Andy",
//   activo: true,
//   recuperarClave: function () {
//     console.log("Recuperando clave...");
//   },
// };





// Las factory comienzan con las palabras crear o create
// sirve para evitar lo de arriba jsjs
function crearUsuario(name, email) {
  return {
    email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log("Recuperando clave...");
    },
  };
}

let user1 = crearUsuario('Andy', 'Andy@outlook.com');
let user2 = crearUsuario('Fer', 'Fer@outlook.com');
console.log(user1);
console.log(user2);
console.log(crearUsuario);