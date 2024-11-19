function cualEsMayor(a, b) {
// Primera solución
    // if (a < b) {
    //     return b;
    // } else {
    //     return a;
    // }

// Solución óptima
    return a > b ? a : b;
}

let mayor = cualEsMayor(10,15);

console.log(mayor);