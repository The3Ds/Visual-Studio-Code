// lo que queremos hacer:
// { id: 1, recuperarClave: 'function(){}'}

// Empieza con mayus por ser constructor
function Usuario() {
  this.id = 1;
  this.recuperarClave = function () {
    console.log("recuperando clave...");
  };
}

// así como está, no retorna naaaada
// bueno... undefined
// let usuario = Usuario();
// console.log(usuario);

let usuario = new Usuario();
console.log(usuario);


// Giro de tuerca, hicimos un método
// no una función :O
