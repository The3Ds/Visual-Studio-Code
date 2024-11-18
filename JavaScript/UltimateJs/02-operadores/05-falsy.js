// short-cricuit

//Falso
// false
// 0
// ''
// null
// undefined
// NaN

// si el primero es true se da el valor, sino se toma el segundo
let nombre = 'chanchito feliz';
let username = nombre || 'anonimo';
console.log(username);

function fn1() {
    console.log('soy función 1');
    return false;
}

function fn2() {
    console.log('soy función 2');
    return true;
}

// verifica si fn2 es igual a fn1, sino se activa el primero, si son, se hacen los dos
let x = fn1() && fn2();