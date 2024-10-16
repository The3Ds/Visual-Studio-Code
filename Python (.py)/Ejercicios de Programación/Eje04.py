"""

/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */


"""


#Chido, salió muy bien. 
#Se puede marcar el valor mediante un boolean, para definir si es
# o no primo hasta terminar el último dato
print(1)
print(2)
for primo in range(1,101):
    for divisor in range(2,primo):
        if primo % divisor == 0:
            break
        elif primo-1 == divisor:
            print(primo)




#Chat GPT
for primo in range(2,101):
    valor_primo = True
    for divisor in range(2,primo):
        if primo % divisor == 0:
            valor_primo = False
            break
    
    #se puede retirar el true, por defecto evalua si es true
    if valor_primo == True:
        print(primo)