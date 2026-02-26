const estudiante={
    nombre: "Juan",
    apellido: "Arango",
    codigo: "001",
    semestre: "2026-1",
    notas: {
        calculo: [3, 5, 4, 2],
        algebra: [4, 3, 1, 1],
        programacion: [5, 1 , 5, 5],
        sistemas: [4, 4, 4, 4]
    },
    activo: true
}

const estudiante2={
    nombre: "Santiago",
    apellido: "Restrepo Autoproyectadas",
    codigo: "002",
    semestre: "2026-1",
    notas: {
        calculo: [4, 4, 5, 3],
        algebra: [4, 3, 0, 1],
        programacion: [5, 5 , 5, 5],
        sistemas: [4, 4, 3, 4]
    },
    activo: true
}

const estudiante3={
    nombre: "Simon",
    apellido: "chimberto",
    codigo: "003",
    semestre: "2026-1",
    notas: {
        calculo: [1, 4, 5, 3],
        algebra: [4, 3, 1, 1],
        programacion: [5, 1 , 5, 5],
        sistemas: [4, 2, 3, 1]
    },
    activo: true
}

function calcularPromedio(estudiante){
    let suma = 0;
    let cantidad = 0;
    for (let materia in estudiante.notas){
        for (let nota of estudiante.notas[materia]){
            suma += nota;
            cantidad++;
        }
    }
    return suma / cantidad;
}

console.log("el promedio del estudiante es: " + calcularPromedio(estudiante));
/*
estudiante.nombreCompleto = function(){
    return estudiante.nombre + " " + estudiante.apellido; 
}
*/
function nombreCompleto(estudiante){
    return estudiante.nombre + " " + estudiante.apellido;
}
console.log(nombreCompleto(estudiante)); 
//let nombreCompleto = estudiante.nombreCompleto();
//console.log ("el nombre completo del estudiante es: " + nombreCompleto);

function estaAprobado(estudiante){
    if (calcularPromedio(estudiante) >= 3){
        return "aprobado";
    } else {
        return "reprobado";
    }
}
console.log("el estado del estudiante " + estudiante.nombre + " es: " + estaAprobado(estudiante));

function agregarNota(estudiante, materia, nota){
    const nuevaNota = nota   //aqui asignamos la nota que queremos agregar en la consola
    if (nuevaNota >= 0 && nuevaNota <= 5){ //validamos que la nota corresponda a la nomenclatura
        if(materia in estudiante.notas){ //validamos que la materia exista en el objeto
            estudiante.notas[materia].push(nuevaNota); //si la materia existe, agregamos la nueva nota al array de esa materia
        } else{
            console.log("la materia no existe");
        }
    }else{ //validaciones de cuando la nota o la materia no exista 
        console.log("la nota no es valida el rango es de 0 a 5");
    }
    
    console.log("notas completas nuevas: ", estudiante.notas);
    
}
agregarNota(estudiante, "algebra", 4);
console.log("notas agregadas correctamente");

function datosEstudiante(estudiante){
    console.log ("codigo: " + estudiante.codigo  + "\n" + "nombre completo: " + nombreCompleto(estudiante) + "\n" + "semestre: " + estudiante.semestre
    + "\n" + "Promedio de materias: " + calcularPromedio(estudiante) + "\n" + "materias y notas: " + JSON.stringify(estudiante.notas) + "\n" + "estado: " + estaAprobado(estudiante));
}
datosEstudiante(estudiante);



//parte b

function Curso(nombre, codigo, estudiantes){
    this.nombre = nombre;
    this.codigo = codigo;
    this.estudiantes = estudiantes || [];
}

const c1= new Curso("Programacion", "001", [])

function agregarEstudiante(curso, estudiante){
    curso.estudiantes.push(estudiante);
}

agregarEstudiante(c1, estudiante);
agregarEstudiante(c1, estudiante2);
agregarEstudiante(c1, estudiante3);

function listarEstudiantes(curso){
    for (let estudiante of curso.estudiantes){
        console.log(nombreCompleto(estudiante));
    }
}

function calcularPromedioMateria(estudiante, curso){
    let materia = curso.nombre.toLowerCase();

    let notas = estudiante.notas[materia];

    if (!notas){
        return 0;
    }

    let suma = 0;

    for (let nota of notas){
        suma += nota;
    }

    return suma / notas.length;
}

function calcularPromedioCurso(curso){
    let suma = 0;
    let cantidad = 0;

    for (let estudiante of curso.estudiantes){
        let promedio = calcularPromedioMateria(estudiante, curso);

        suma += promedio;
        cantidad++;
    }

    return suma / cantidad;
}
console.log("el promedio de el curso es:", calcularPromedioCurso(c1));

function MejorPromedio(curso){
    let promedioActual = 0;
    let mejorEstudiante = null;
    for (let estudiante of curso.estudiantes){
        let promedio = calcularPromedioMateria(estudiante, curso);
        if (promedio > promedioActual){
            promedioActual = promedio;
            mejorEstudiante = estudiante;
        }
    } return nombreCompleto(mejorEstudiante) + " con un promedio de: " + promedioActual;
}

console.log("el mejor estudiante del curso es: " + MejorPromedio(c1)); 

//object key, values y entries
console.log("keys")
const claves = Object.keys(estudiante); //keys convierte el objeto en un array y retorna los nombres de las propiedades
console.log(claves);


console.log("------------")

console.log("values")
const valores = Object.values(estudiante); //entries hace lo mismo que keys con la diferencia de que retorna el valor de cada propiedad del objeto
console.log(valores);

console.log("------------")

console.log("entries")
const entradas = Object.entries(estudiante); //lo mismo que los anteriores pero retorna valor y clave de propiedad del objeto
console.log(entradas);

//diferencias entre copiar por referencia y copiar por valor

//referencia
let copia1 = estudiante;

copia1.nombre = "Pedro";

console.log("Referencia:");
console.log(estudiante.nombre); //aqui se muestra que el nombre del estudiante original cambia porque se hizo una copia por referencia
console.log(copia1.nombre);

console.log("------------")

//assign
let copia2 = Object.assign({}, estudiante);

copia2.nombre = "Carlos";

console.log("Assign:");
console.log(estudiante.nombre); //aqui se muestra que el nombre del estudiante original no cambia porque se hizo una copia por valor con object.assign
console.log(copia2.nombre);

console.log("------------")

//spread 
let copia3 = { ...estudiante };

copia3.nombre = "Andres";

console.log("Spread:");
console.log(estudiante.nombre); //aqui se muestra que el nombre del estudiante original no cambia porque se hizo una copia por valor con spread
console.log(copia3.nombre);


// Cambio interno (sigue siendo el mismo)
copia3.notas.calculo[0] = 5;

console.log("Cambio interno:");
console.log(estudiante.notas.calculo[0]);
console.log(copia3.notas.calculo[0]);
//en resumen la copia por referencia hace que ambas variables apunten al mismo objeto mientras que las copias con object.assign y spread crean un nuevo objeto pero las propiedades son compartidas