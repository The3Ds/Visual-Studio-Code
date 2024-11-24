// const user = { id: 1, name: 'Andy' }; - es valido escribirlo así

const user = { id: 1 };
/**
 *  Al definirla como const no podemos cambiar su valor
 *  esto quiere decir que no podremos retirar su tipo
 *  objeto, no podrá recibir ni string, boolean o number;
 *  Es exclusivo de objeto.
 *  El contenido si es posible editar, más no la variable
 *  en sí de user
 */

user.name = "Andrés";
user.guardar = function () {
  console.log("Guardando", user.name);
};

console.log(user);
user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

/**
 *  Si nosotros queremos que de plano no se
 *  modifique nada de la variable, incluso
 *  las propiedades de un objeto
 */
const user1 = Object.freeze({ id: 1});
user1.name = 'Andy';
user1.id = 2;
console.log(user1);




/**
 *  Si nosotros queremos que de plano no se
 *  modifique nada de la variable, pero si
 *  las propiedades de un objeto
 */
const user2 = Object.seal({ id: 1});
user2.name = 'Andy';
user2.id = 2;
console.log(user2);

