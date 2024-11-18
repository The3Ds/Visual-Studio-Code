
"""
/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
""" 
def area(Figure):
    if Figure == "Cuadrado":
        a = int(input("  Dimención de la base: "))
        area = a*a
        return print("   Área del Cuadrado =", area)
    
    elif Figure == "Rectángulo":
        a = int(input("  Dimención de la base: "))
        b = int(input("  Dimención de la altura: "))
        area = a*b
        return print("   Área del Rectángulo =", area)

    elif Figure == "Triángulo":
        a = int(input("  Dimención de la base: "))
        h = int(input("  Dimención de la altura: "))
        area = a*h/2
        return print("   Área del Triángulo =", area)
    else: return print("Las entradas disponibles son: Cuadrado, Rectángulo, Triángulo.")

area(input("Bienvenido, este programa puede calcular el área de un Cuadrado, Rectángulo y Triángulo; \n ¿A qué figura desea obtener el área? "))


"""
Versión de Chatgpt

Me gusta, aquí puntos clave que debo tomar en cuenta:
---Considera posibles errores de entrada.
-------Ejemplo: el usuario ingresa cualquier cosa menos el parámetro deseado.
---Simplifica el uso del print.
-------Separa el comando de la función principal para hacerla versatil.
---Olvidé dar a las variables nombres representativos.
-------Por cuestiones de limpieza, no hacer esto hace que mi código no se entienda de mejor manera.
-------Es algo a considerar para mis futuras implementaciones.
---Es más fácil de modificar o expandir si necesito agregar más tipos de figuras en el futuro.


def calcular_area(figura):
    if figura == "Cuadrado":
        lado = int(input("Dimensión del lado: "))
        area = lado * lado
        return area
    
    elif figura == "Rectángulo":
        base = int(input("Dimensión de la base: "))
        altura = int(input("Dimensión de la altura: "))
        area = base * altura
        return area

    elif figura == "Triángulo":
        base = int(input("Dimensión de la base: "))
        altura = int(input("Dimensión de la altura: "))
        area = (base * altura) / 2
        return area

    else:
        print("Figura no válida. Las opciones son: Cuadrado, Rectángulo o Triángulo.")
        return None

# Solicitar la figura al usuario y calcular el área
figura = input("Bienvenido, este programa puede calcular el área de un Cuadrado, Rectángulo y Triángulo. \n ¿A qué figura desea obtener el área? ")
resultado = calcular_area(figura)

if resultado is not None:
    print(f"El área del {figura} es: {resultado}")


"""