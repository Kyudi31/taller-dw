//Empezamos declarando la variable de cada tipo de datos primitivo de JavaScript

let String = "HolaProfe" //Esto es una variable String: secuencia de caracteres.
let numero = 1 // Esto es una variable tipo numeros: numeros enteros o puntos flotantes
let booleano = true // Esto es una variable de tipo boolean: true o false
let nulo = null // Esto es una variable de tipo null. Remarca la ausencia de un valor en específico.
let indefinido = undefined // la variable indefinida. Es una variable declara pero sin un valor asignado.
let intGrande = 545656251 // Esta variable acoge números enteros muy grandes.
let identificador = Symbol('identificador') // Esta variable sirve para obtener valores únicos e inmutables.

function analizarTipo(valor){
    // typeof devuelve una cadena que indica el tipo del operando.
    // Para null, typeof retorna "object" (error histórico del lenguaje).
    let tipo = typeof valor;
    let descripcion = "";

        // Determinamos si el valor es null o undefined usando comparación estricta.
    // Esto es útil porque ambos representan "ausencia de valor" pero son distintos.
    esNulo = (valor === null || valor === undefined)


    // Es importante el orden: primero verificamos null explícitamente,
    // porque typeof null es "object" y podría confundirse
    if (tipo === "string"){
        descripcion = "cadena de texto";
    }else if (valor === null){
        descripcion = "valor nulo";
    }else if (tipo === "boolean"){
        descripcion = "tipo booleano";
    }else if (valor === undefined){
        descripcion = "tipo indefinido"
    }else if (tipo === "bigint")
        descripcion = "Entero grande"
    else if (tipo === "symbol"){
        descripcion = "simbolo"
    }

    return {
    valor:valor// El valor original.
    , tipo:tipo // // El resultado de typeof.
    , esNulo:esNulo,  // Booleano: true si es null o undefined.
     descripcion:descripcion // Descripción personalizada.

    }
}


console.log(analizarTipo("Hola mundo"));
console.log(analizarTipo(null));    
console.log(analizarTipo(true));
console.log(analizarTipo(false));
console.log(analizarTipo(Symbol("nombre")));
console.log(analizarTipo(5555454515151414151n));
console.log(analizarTipo(undefined))


