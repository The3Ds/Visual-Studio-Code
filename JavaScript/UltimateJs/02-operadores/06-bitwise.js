/*
bit: 0 1
Byte: 8 bits -> 00000000
Byte: 8 bits -> 00000000 -> 0
Byte: 8 bits -> 00000001 -> 1
Byte: 8 bits -> 00000010 -> 2
Byte: 8 bits -> 00000011 -> 3
Byte: 8 bits -> 00000100 -> 4
Byte: 8 bits -> 00000101 -> 5
Byte: 8 bits -> 00000110 -> 6

Decimal: 0,1,2,3,4,5,6,7,8,9
*/

// devuelve todos los bits(decimales) que tienen
console.log(1 | 3); // 00000011
console.log(1 | 4); // 00000101
console.log(3 | 5); // 00000111

// devuelve exclusivamente los bits(decimales) que se comparten
console.log(1 & 3); // 00000001
console.log(1 & 4); // 00000000
console.log(3 & 5); // 00000001