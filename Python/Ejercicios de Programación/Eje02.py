"""
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
"""
"""
Mi intento de código que funciona, pero no es lo más óptimo

String_one = input()
String_two = input()

count_string_one, count_string_two = len(String_one), len(String_two)

if count_string_one == count_string_two:
    for letter_position in range(count_string_one):
        for compare_position in range(count_string_one-letter_position):
            if String_one[letter_position] == String_two[compare_position]:
                String_two = String_two[:compare_position] + String_two[compare_position + 1:]
                if len(String_two) == 0: print("Strings are anagrams")
                break
else:
    print("Two strings are not anagrams")
"""

#Código de ChatGPT, super eficiente y corto

String_one = input().replace(" ", "").lower()
String_two = input().replace(" ", "").lower()

if sorted(String_one) == sorted(String_two):
    print("Strings are anagrams")
else:
    print("Two strings are not anagrams")
