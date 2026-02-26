const categoria = [ "computadores", "celulares", "accesorios"]
const productos =[
    {nombre: "Lenovo LOQ", precio : 500000, tipo: categoria[0], stock: 10, disponible: true  },
    {nombre: "HP Victus", precio : 500000, tipo: categoria[0], stock: 5, disponible: true  },
    {nombre: "Samsung Galaxy S22", precio : 200000, tipo: categoria[1], stock: 20, disponible: true  },
    {nombre: "iPhone 13", precio : 250000, tipo: categoria[1], stock: 15, disponible: true  },
    {nombre: "Mouse Logitech", precio : 20000, tipo: categoria[2], stock: 50, disponible: true  },
    {nombre: "Teclado Razer", precio : 30000, tipo: categoria[2], stock: 30, disponible: true  },
    {nombre: "Asus ROG", precio : 120000, tipo: categoria[0], stock: 8, disponible: true  },
    {nombre: "Xiaomi Mi 11", precio : 180000, tipo: categoria[1], stock: 25, disponible: true  },
    {nombre: "Audífonos Sony", precio : 40000, tipo: categoria[2], stock: 40, disponible: true  },
    {nombre: "MacBook Pro", precio : 300000, tipo: categoria[0], stock: 3, disponible: true  }
]

function contarTotalDeProductos(){
    let i = 0;//contador para saber cuantos indices tiene el array
    for (let producto of productos){ //entramos al array con el for
        i ++; // sumamos al contador
    }   
    console.log ("el total de productos es " + i); // imprimimos el total cuando salgamos del ciclo 
}

function sumarTodosLosPrecios(){
    let total = 0; // acumulador de los precios
    for (let producto of productos){ // entramos al array 
        if (producto.disponible == true){ // validacion para confirmar que el producto esta disponible 
            total += producto.precio; // sumamos al acumulador si el producto esta disponible 
        }
        else{
            console.log("el producto: " + producto.nombre + "sin stock"); //se imprime el producto que no esta disponible
        }
    }
    console.log("el total de los precios es: " + total); // imprime despues del ciclo
}

function contarStockDeProductos(){
    let stockTotal = 0; //otro acumulador 
    for (let producto of productos){ //entramos al array
        stockTotal += producto.stock // sumamos todos los stocks
        console.log("el stock total de el producto: " + producto.nombre + "es: " + producto.stock); //al recorrer imprime el sotck de cada producto 
    }
    console.log("el stock de todos los productos es :" + stockTotal );// imprime el stock total
}
//se invocan las funciones 
contarTotalDeProductos();
sumarTodosLosPrecios();
contarStockDeProductos();

// parte b 

const filtrarPrecio = productos.filter(producto => producto.precio >= 500000);
const filtrarCategoria = productos.filter(producto => producto.tipo === "celulares"); //recorremos el array en busca del tipo celular y precio => 500000

console.log("producto con precio igual o mayor a 500000:", filtrarPrecio);
console.log("producto de la tipo celulares:", filtrarCategoria); //los imprimimos 

const nombrePrecio = productos.map(producto => { //el map recorre todo el array y devuelve un nuevo array con los cambios que le indique 
    return {
        nombre: producto.nombre,
        precio: producto.precio //seleccionamos los atributos nombre y precio que son los solicitados para retornar el nuevo arrar
    }
});

console.log("nombre y precio: ", nombrePrecio); // lo imprimimos en la consola

const descuento = productos.map(producto => {
    return { //misma teoria que la anterior pero con un descuento en el precio
        nombre: producto.nombre,
        precio: producto.precio * 0.85 //se multiplica el precio para aplicar el descuento 
    }
});

console.log("productos con descuento: ", descuento); //imprimimos el array con el descuento del 15%

const totalInventario = productos.reduce((i, producto) => { //reduce recorre todo el array y devuelve un valor acumulado en este caso es i que se inicializa en 0 y se le va sumando el resultado de multiplicar el precio por el stock de cada producto para obtener el valor total del inventario
    return i + (producto.precio * producto.stock);
}, 0); //este 0 es el valor inicial de i, es decir, el acumulador comienza en 0 antes de sumar el valor de cada producto al total del inventario

console.log("total inventario: ", totalInventario); //imprimimos el total del inventario


const sinStock = productos.find(producto => producto.stock === 0); //find recorre el array y devuelve el primer objeto que cumpla la condicion, en este caso retornara undefined 

console.log("producto sin stock: ", sinStock); //imprimimos 

const algunoCaro = productos.some(producto => producto.precio > 2000000); //some recorre el array y devuelve true si al menos un elemento cumple la condicion en este caso no hay alguno que la cumpla entonces retorna false
console.log("productos que cuestan mas de 2m: ", algunoCaro);

const todosDisponibles = productos.every(producto => producto.disponible === true); //every recorre el array y devuelve true si todos los elementos cumplen la condicion en este caso todos los productos estan disponibles entonces retorna true
console.log("los productos disponibles son: ", todosDisponibles); 

const ordenados = [...productos].sort((a, b) => a.precio - b.precio); //sort ordena el array comparando dos elementos a y b
console.log("Ordenados por precio:", ordenados); //si el resultado es negativo a va antes que b y si es positivo b va antes que a y si es 0 no cambia el orden