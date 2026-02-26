
//Elaboración de la función tabla de multiplicar
function TablaMultiplicar(numero) {
    let i = 1; // Se inicializa el contador en 1, es el primer número a multiplicar


    /*
    Usamos un ciclo while que funcionaría de la siguiente manera:
    Mientras el contador (i) sea menor o igual a 10, la tabla sigue generándose.
    */
    while (i <= 10) {
        let resultado = numero * i; // Se calcula el producto 
        console.log(resultado); // Se muestra el resultado
        i++; // Se incrementa el contador para la siguiente iteración
    }



}
    


//Aquí determinamos si un número es primo con la funcíon esPrimo
function esPrimo(numero) {

  for (let i = 2; i < numero; i++) { // Si el número no es divisible por i, entonces el número no es primo.

    if (numero % i === 0) {
      return false; // Salimos del ciclo porque ya sabemos que el número escogido no es primo
    }

  }


  return numero !== 1; //Lo que hacemos aquí es saber que si el número es 1, no es primo.
  // Pero si el número es mayor y no encontramos divisores, es primo. 
  // Recordemos que un número primo es aquel que se divide por si mismo y por uno.
}

function primosMenoresA(limite){
    const retornarPrimos = []; //Arreglo en donde vamos a almacenar los primos encontrados
    for (let i = 0; i<limite; i++){
        if (esPrimo(i)){ //Recorremos el ciclo y llamos a la función esPrimo para que haga nuestro trabajo. De esta manera
            // Si el número actual es primo lo añadimos al arreglo
            retornarPrimos.push(i);// El push se utiliza uno o más elementos al arreglo. Es muy útil porque devuelve la nueva longitud de arreglo.

        }


    }

    return retornarPrimos; // Devolvemos el array con todos los primos menores que el límite.
}





console.log("Tablas de multiplicar")
TablaMultiplicar(5); // Llama a la función para mostrar la tabla del cinco (cabe recalcar que puede ser cualquier número, este fue un ejemplo para demostrar la ejecución)

console.log(esPrimo(50))
console.log(primosMenoresA(20));// Obtiene todos los números que son menores que 20