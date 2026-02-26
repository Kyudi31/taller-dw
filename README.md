# taller-dw
# Taller de JavaScript – Punto 1

**Autores:**  
- Santiago Restrepo → Puntos 1 y 2  
- José Manuel Pérez → Puntos 3 y 4  
# punto 1 
En este punto se trabajaron los tipos de datos primitivos de JavaScript (string, number, boolean, null, undefined, bigint y symbol) y se creó la función `analizarTipo(valor)` para identificar el tipo de dato, validar si es nulo o indefinido y generar una descripción. Se probaron distintos valores mostrando los resultados en consola.

En la segunda parte se implementó un sistema de calificaciones usando un arreglo de notas y la función `clasificarNota(nota)`, la cual asigna una letra, un estado (aprobado o reprobado) y un mensaje motivacional. Se utilizó `switch` para clasificar la nota e `if/else` para el estado. Con un ciclo `for` se recorrieron las notas y se calcularon el promedio del grupo, la cantidad de aprobados y reprobados, así como la nota máxima y mínima.
# punto 2:
En este punto se implementó un sistema de clasificación de notas mediante la función `clasificarNota(nota)`, la cual asigna una letra (A–F), un estado (Aprobado o Reprobado) y un mensaje motivacional según el valor de la nota. Se utilizó `switch(true)` para clasificar los rangos y `if/else` para determinar el estado. Luego, con un ciclo `for`, se recorrió un arreglo de notas para mostrar los resultados y calcular estadísticas como el promedio, cantidad de aprobados y reprobados, y las notas máxima y mínima.

En la segunda parte se desarrollaron funciones para trabajar con ciclos. Se creó `TablaMultiplicar(numero)` usando un ciclo `while` para generar la tabla de multiplicar. También se implementó `esPrimo(numero)` para verificar si un número es primo y `primosMenoresA(limite)` para obtener todos los números primos menores a un valor dado utilizando un ciclo `for`. Finalmente, se probaron las funciones mostrando los resultados en consola.
# punto 3 
En este punto se trabajó con un arreglo de productos organizado por categorías, donde cada producto tiene atributos como nombre, precio, tipo, stock y disponibilidad. Se implementaron funciones usando ciclos `for...of` para contar el total de productos, sumar los precios de los productos disponibles y calcular el stock total, mostrando los resultados en consola.

Además, se utilizaron métodos nativos de JavaScript para manipular el arreglo: `filter` para obtener productos por precio y categoría, `map` para generar nuevos arreglos con información específica y aplicar descuentos, `reduce` para calcular el valor total del inventario, `find` para buscar productos sin stock, `some` y `every` para validar condiciones y `sort` para ordenar los productos por precio. Esto permitió analizar y transformar los datos de forma eficiente.
# punto 4
En este punto se trabajó con objetos que representan estudiantes, incluyendo sus datos personales y notas por materia. Se implementaron funciones para calcular el promedio general, obtener el nombre completo, determinar si un estudiante aprueba, agregar nuevas notas y mostrar toda la información del estudiante en consola. Esto permitió manipular y recorrer objetos con estructuras anidadas.

También se creó una función constructora `Curso` para agrupar estudiantes, junto con funciones para agregarlos, listarlos, calcular el promedio por materia según el curso, el promedio general del curso y encontrar el mejor estudiante. Finalmente, se utilizaron `Object.keys`, `Object.values` y `Object.entries` para recorrer propiedades de un objeto, y se demostró la diferencia entre copiar por referencia y por valor usando asignación directa, `Object.assign` y el operador spread.
