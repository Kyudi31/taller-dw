// Arreglo que contiene las notas de los estudiantes como lo dicta el ejercicio.
const nota = [2.5,3.0,5.0,4.0,4.0,1.0, 4.4, 4.5];

function clasificarNota(nota){
    let mensajeMotivacional = "";
    let estado= "";
    let letra = "";


    // Asignamos switch(true) para evaluar condiciones booleanas
    switch(true){
        case (nota>=4.5 && nota <= 5.0):
            letra = "A";
            break;
        case (nota >= 4.0 && nota <=4.4) :
            letra = "B";
            break;
        case (nota >= 3.5 && nota <=3.9):
            letra = "C";
            break;
        case (nota >= 3.0 && nota <=3.4):
            letra = "D";
            break;
        case (nota < 3.0):
            letra = "F";
            break;
        default:
            // El default tiene como función en este contexto controlar las entradas si la nota está fuera del rango
            console.log("nota no disponible");
    }


        /*
        Según el nivel de desempeño de los estudiantes, habrá un mensaje motivacional. Usamos el condicional
        if/else para hacer este control específico.
        */
              if (nota >= 4.5 && nota <= 5.0){
                mensajeMotivacional = "muy bien, sigue así";
                estado = "Aprobado";
            }else if (nota >= 4.0 && nota <= 4.4 ){
                mensajeMotivacional= "Tú puedes seguir adelante";
                estado = "Aprobado"
            }else if (nota >= 3.5 && nota <=3.9 ){
                mensajeMotivacional= "Un poquito baja, pero tú puedes";
                estado = "Aprobado"
            }else if (nota >= 3.0 && nota <=3.4 ){
                mensajeMotivacional= "aprobaste...";
                estado = "Aprobado"
            }else{
                mensajeMotivacional= "Lo puedes intentar otra vez, de eso se trata la vida";
                estado = "Reprobado"
            }

            // El return en Js tiene como finalidad retornar un objeto (en este caso clasificarNota) con toda la información. 
            
            return{
                nota:nota, letra:letra, mensajeMotivacional:mensajeMotivacional, estado:estado
            }
}


let acumuladorNota = 0;  //acumulador para calcular el promedio
let acumuladorAprobados = 0; //contador de estudiantes aprobados
let acumuladorNoAprobados = 0; // Contador de estudiantes reprobados
let notaMax = nota[0]; // Se inicializa con la primera nota para realizar una comparación
let notaMin = nota[0]; // Se inicializa con la primera comparación
let suma = 0; // Otro acumulador para calcular el promedio respectivo

console.log("Notas de los estudiantes");
   // Ciclo for clásico, tal como dicta el enunciado. Su función es hacer el recorrido básico, teniendo un control
   // en el índice.
    for(let indice = 0; indice<nota.length; indice++){
        const notas  = nota[indice];
        const resultado = clasificarNota(notas);
        
        // Se muestra el objeto resultado en la consola
        console.log(resultado);
         

        // acumulamos la nota para el promedio
        suma += notas;
        acumuladorNota += notas;


        // Los contadores respectivos de aprobados y reprobados según el retorno
        // Usamos el === para tener una igualdad estricta
        if (resultado.estado === "Aprobado"){
            acumuladorAprobados++;

        }else{
            acumuladorNoAprobados++;    
        }
         
        // La actualización respectiva de la nota mínima (notaMin) y la notaMax.
        if (notas > notaMax) notaMax = notas;
        if (notas < notaMin) notaMin = notas;
          
    }


// Cálculo del promedio
const promedio = suma/ nota.length;


// Aquí se evidencian los resultados a través de la impresión de los resultados.

console.log("El promedio de estudiantes "+ promedio);
console.log("Cantidad de estudiantes aprobados: "+ acumuladorAprobados);
console.log("Cantidad de estudiantes reprobados: "+ acumuladorNoAprobados);
console.log("Nota más alta: "+notaMax);
console.log("Nota más baja: "+notaMin);