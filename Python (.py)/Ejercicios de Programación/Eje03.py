"""

/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
"""

"""
Mi versión, me gustó el resultado


primer_numero, segundo_numero = 0, 1
print(primer_numero)
print(segundo_numero)

for _ in range(6):
    tercer_numero = primer_numero + segundo_numero
    print(tercer_numero)
    primer_numero, segundo_numero = segundo_numero, tercer_numero
"""


#versión de ChatGPT - cool
fibonacci = [0, 1]
for _ in range(6):  # Solo necesitamos 4 iteraciones adicionales
    fibonacci.append(fibonacci[-1] + fibonacci[-2])

print(*fibonacci)  # Imprime los números de Fibonacci