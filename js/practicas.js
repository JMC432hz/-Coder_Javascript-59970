//! ACTIVIDAD 1 
/*Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
*/

// let numero = parseInt (prompt ("Ingresá un numero"));
// if (numero > 1000) {
//     alert ("Es mayor a 1000");
// }

//! ACTIVIDAD 2
/*Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.*/

// let texto = prompt("Ingresá una palabra");
// if (texto.toLocaleLowerCase().trim() === "hola") {
//     console.log("Hola, como andas?");
// }

//! ACTIVIDAD 3
/*Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.*/

// let numero = parseInt(prompt("Ingresá un número"));
// if (numero >= 10 && numero <= 50) {
//     alert("El número ingresado esta entre 10 y 50.");
// }

//! MI CONSULTA Y DESARROLLO DE 1ER PREENTREGA. Pedir por prompt un numero e indicar por consola si no es multiplo de 5 "Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.    OK"
/*El siguiente codigo esta mal planteado. La logica del texto no coincide con el resultado del calculo*/
/*SOLUCION. En comparación al ejemplo en clase yo buscaba un aviso de que el nro ingresado no es correcto al no ser divisible por 5. Hice el cambio de operador, estrictamente igual === a estrictamente distinto !==  */


/********************CONDICIONALES******************************** */


// let numero = parseInt(prompt("Ingrese cantidad"));

// if (numero % 5 !== 0) { 
//     console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
//     /*Ingreso un nro que no es divisible por 5 /5 y los junta como resultado, que tampoco da el resultado buscado porque no los suma*/ 
// } else{
//     producto = numero;
//     console.log("La cantidad ingresada es de" + " " + producto);
// }

// console.log ("Desea sumar cantidad?");

/*HASTA ACA BIEN. Aunque la pregunta del ultimo log confunde, las estructuras CONDICIONALES IF ELSE se ejecutan una sola vez. Para cumplir el objetivo de la suma de varios numeros ya se precisa CICLOS*/


// let suma = prompt("Ingrese cantidad");
// suma = suma + numero;
// console.log ("Venis sumando " + suma);

/*ERROR ACA. me da 55 al poner dos veces seguidas el rno 5. no me suma los numeros ingresados. Busco 10 de resultado, suma*/


// Siguientes lineas continuaria la logica de la suma condicionada solo a valores divisibles por 5//

//if (numero % 5 !== 0)
//if (numero % 5 !== 0) { 
//     console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.")
// } else{
//     producto = numero;
//     console.log("La cantidad ingresada es de" + " " + producto);
// }







// EL SIGUIENTE CHAT GPT. Falla en la condicional de si Desea sumar otra cantidad?. No continua el proceso de suma. 
// /*SOLUCION. El codigo era estricto a la respuesta del Sí (con tilde)*/

// let numero = parseInt(prompt("Ingrese cantidad"), 10)
// let producto = 0

// if (numero % 5 !== 0) {
//     console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
// } else {
//     let producto = numero;
//     console.log("La cantidad ingresada es de " + producto + " lts.");

// }
//     let deseaSumar = prompt("Desea sumar otra cantidad? (si/no)");
//     let suma = producto;

//     while (deseaSumar.toLowerCase() === "si") {
//         let cantidadAdicional = parseInt(prompt("Ingrese cantidad adicional"), 10);

//         if (isNaN(cantidadAdicional) || cantidadAdicional % 5 !== 0) {
//             console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
//         } else {
//             suma += cantidadAdicional;
//             console.log("La cantidad total es de " + suma + " lts.");
//         }

//         deseaSumar = prompt("Desea sumar otra cantidad? (si/no)");
//     }

//     console.log("La cantidad final es de " + suma + " lts.");



/*CICLOS. Desarrollando, no cierra*/



// let entrada = parseInt(prompt("Ingrese cantidad"));
// let producto = 0


// while (entrada % 5 !== 0) { 
//     console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts."); 
//     console.log ("Ingrese cantidad segun UMC");

//     entrada = parseInt(prompt("Ingrese cantidad"))
// }

//     producto = producto + entrada;

//     console.log ("Suma en su carrito " + producto);
//     console.log ("Desea sumar mas cantidad?")

//     entrada = parseInt(prompt("Ingrese cantidad"));



// else if (entrada % 5 === 0){
//     producto = producto + entrada;
//     console.log ("La cantidad ingresada es de" + " " + entrada + " lts.");
//     console.log ("Suma " + producto + " lts en su compra")
// } else { console.log ("Desea sumar mas cantidad?")}       
// console.log ("Desea sumar mas cantidad?")

/*Ingreso un nro que no es divisible por 5 /5 y los junta como resultado, que tampoco da el resultado buscado porque no los suma*/
// } else{
//     producto = numero;
//     console.log("La cantidad ingresada es de" + " " + producto);
// }

// console.log ("Desea sumar cantidad?");



//------------------------------------------OBJETOS---------------------------------------------------------

//! Objeto Literal


// let producto = {
//     categoria: "Papeles Higienicos y Toallas",
//     codigo: "00001", 
//     descripcion: "Papel Higienico",
//     marca: "Elite",
//     umc: 40, /*presentación*/
//     presentacion: "Pack",
//     precioPorPack: 20000 /* $ segun umc */,
//     precioUnitario: 500,
// }

// console.log(producto.codigo + " " +  producto.descripcion + " " + producto.marca + " " + producto.presentacion + " de " + producto.umc + " unidades." + " Precio " + "$" + producto.precioPorPack);

//!Constructor
//? Ver objeto del uso de objetos contructores y uso de prompt en ellos. Como puede inferir, intervenir el ingreso de datos a traves de prompt para objetos


// function Producto(descripcion, marca, presentacion,umc, precioPorPack) {
//     this.descripcion = descripcion;
//     this.marca = marca;
//     this.presentacion = presentacion;
//     this.umc=umc;
//     this.precioPorPack=precioPorPack;
// }

// const producto1 = new Producto ( "papel higienico", "Scott", "Pack", 40, 20000);
// console.log(producto1)

//! Metodos

// function Producto(descripcion, marca, presentacion,umc, precioPorPack) {
//     this.descripcion = descripcion;
//     this.marca = marca;
//     this.presentacion = presentacion;
//     this.umc=umc;
//     this.precioPorPack=precioPorPack;
// }

// const producto1 = new Producto ( "papel higienico", "Scott", "Pack", 40, 20000);


/*Prueba de poner la funcion abajo de la creacion de la variable. OK FUNCIONA, MISMO RESULTADO*/




// function Usuario(nombre, edad, pais) {
//     this.nombre = nombre;
//     this.edad= edad;
//     this.pais = pais;
//     this.saludar = function(){ 
//             console.log("Hola " + this.nombre);
//     }

// }

// const usuario1 = new Usuario ( "Juan", 41, "Argentina");

// usuario1.saludar();

//! Operador / ciclo for ... in

// let producto = {
//     categoria: "Papeles Higienicos y Toallas",
//     codigo: "00001", 
//     descripcion: "Papel Higienico",
//     marca: "Elite",
//     umc: 40, /*presentación*/
//     presentacion: "Pack",
//     precioPorPack: 20000 /* $ segun umc */,
//     precioUnitario: 500,
// }
// /*chequeo si hay una propiedad en el objeto*/
// // console.log("marca" in producto);
// // console.log("fabricante" in producto);

// for (let propiedad in producto) {
//     console.log(propiedad + " " + producto[propiedad]);
// }

//! Clases

// function Usuario(nombre, edad, pais) {
//     this.nombre = nombre;
//     this.edad= edad;
//     this.pais = pais;
//     this.saludar = function(){ 
//             console.log("Hola " + this.nombre);
//     }

// }

// class Usuario {
//     constructor (nombre , edad, pais) {
//         this.nombre=nombre; 
//         this.edad = edad;
//         this.pais=pais;
//     }

//     saludar() {
//         console.log("Hola " + this.nombre)
//     }
// }

// const usuario1 = new Usuario ( "Juan", 41, "Argentina");

// console.log (usuario1);
// usuario1.saludar();


//*******************ARRAYS ***************************/

/*CON VALORES (STRINGS, NUMEROS, BOOLEANOS)*/

//let array = [ 1, 2, 3, 4, 5];               llamado x 
//            0  1  2  3  4     ----->         indice
//           Juan Julia Maua Rita Alguien

// let array = ["Juan", "Julia", "Maua", "rita", "Alguien"];
// console.log(array);


/*CON OBJETOS */

// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         marca: "Elite",
//         presentacion: "Pack",
//         umc: 40, /*presentación*/
//         precioPorPack: 20000 /* $ segun umc */,
//         precioUnitario: 500,
//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         marca: "Rigel",
//         presentacion: "Bidón",
//         umc: 5, /*presentación*/
//         precioPorPack: 5000 /* $ segun umc */,
//         precioUnitario: 1000,
//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         color: "Verde",
//         medida: "60x60x30",
//         presentacion: "Pack",
//         umc: 250, /*presentación*/
//         precioPorPack: 20500 /* $ segun umc */,
//         precioUnitario: 82,
//     }
// ]

// console.log(productos[0].categoria)
// console.log(productos[0].descripcion)

/*RECORRIDO DEL ARRAY*/

// for( let i=0; i<5; i++) {
//     console.log(productos[i]);
// }

// console.log(productos.length)

// for( let i=0; i<productos.length; i++) {
//     console.log(productos[i]);
// }

// console.log(productos.length)

//!Metodos y propiedades

//?Lenght: Nos retorna la cantidad de elementos que hay en el array

// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         marca: "Elite",
//         presentacion: "Pack",
//         umc: 40, /*presentación*/
//         precioPorPack: 20000 /* $ segun umc */,
//         precioUnitario: 500,
//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         marca: "Rigel",
//         presentacion: "Bidón",
//         umc: 5, /*presentación*/
//         precioPorPack: 5000 /* $ segun umc */,
//         precioUnitario: 1000,
//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         color: "Verde",
//         medida: "60x60x30",
//         presentacion: "Pack",
//         umc: 250, /*presentación*/
//         precioPorPack: 20500 /* $ segun umc */,
//         precioUnitario: 82,
//     }
// ]


// for( let i=0; i<productos.length; i++) {

// }

// console.log(productos.length)


//? push(): Nos permite agregar al final del array. (Ej.: Es util cuando agrego elemento al carrito)

// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         marca: "Elite",
//         presentacion: "Pack",
//         umc: 40, /*presentación*/
//         precioPorPack: 20000 /* $ segun umc */,
//         precioUnitario: 500,
//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         marca: "Rigel",
//         presentacion: "Bidón",
//         umc: 5, /*presentación*/
//         precioPorPack: 5000 /* $ segun umc */,
//         precioUnitario: 1000,
//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         color: "Verde",
//         medida: "60x60x30",
//         presentacion: "Pack",
//         umc: 250, /*presentación*/
//         precioPorPack: 20500 /* $ segun umc */,
//         precioUnitario: 82,
//     }
// ]

// productos.push("Desodorante");
// console.log(productos);

//? unshift() : agrega un elemento al comiezo del array

// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         marca: "Elite",
//         presentacion: "Pack",
//         umc: 40, /*presentación*/
//         precioPorPack: 20000 /* $ segun umc */,
//         precioUnitario: 500,
//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         marca: "Rigel",
//         presentacion: "Bidón",
//         umc: 5, /*presentación*/
//         precioPorPack: 5000 /* $ segun umc */,
//         precioUnitario: 1000,
//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         color: "Verde",
//         medida: "60x60x30",
//         presentacion: "Pack",
//         umc: 250, /*presentación*/
//         precioPorPack: 20500 /* $ segun umc */,
//         precioUnitario: 82,
//     }
// ]

// productos.unshift("Desodorante");
// console.log(productos);




//? pop() : elimina el último elemento del array. (Ej.: Cuando el usuario quiere sacar algun elemento del carrito, o quiere deshacer la última accion)


// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         marca: "Elite",
//         presentacion: "Pack",
//         umc: 40, /*presentación*/
//         precioPorPack: 20000 /* $ segun umc */,
//         precioUnitario: 500,
//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         marca: "Rigel",
//         presentacion: "Bidón",
//         umc: 5, /*presentación*/
//         precioPorPack: 5000 /* $ segun umc */,
//         precioUnitario: 1000,
//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         color: "Verde",
//         medida: "60x60x30",
//         presentacion: "Pack",
//         umc: 250, /*presentación*/
//         precioPorPack: 20500 /* $ segun umc */,
//         precioUnitario: 82,
//     }
// ]

// productos.pop();
// console.log(productos);

//? shift() : Elimina el úlltimo elemento del array y no queda vacia la posicion (undefined)

/*personalmente me puede servir para eliminar la primer posicion 0 y que no quede defasado el primer codigo 0001 o coincida el primer codigo con la posicion 1. Para esto hay que generary agregar un primer elemento (objeto) vacio */


// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         marca: "Elite",
//         presentacion: "Pack",
//         umc: 40, /*presentación*/
//         precioPorPack: 20000 /* $ segun umc */,
//         precioUnitario: 500,
//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         marca: "Rigel",
//         presentacion: "Bidón",
//         umc: 5, /*presentación*/
//         precioPorPack: 5000 /* $ segun umc */,
//         precioUnitario: 1000,
//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         color: "Verde",
//         medida: "60x60x30",
//         presentacion: "Pack",
//         umc: 250, /*presentación*/
//         precioPorPack: 20500 /* $ segun umc */,
//         precioUnitario: 82,
//     }
// ]

// productos.shift();
// console.log(productos);


//? splice() : nos permite eliminar uno o varios elementos en cuaquier posicion del array


// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         marca: "Elite",
//         presentacion: "Pack",
//         umc: 40, /*presentación*/
//         precioPorPack: 20000 /* $ segun umc */,
//         precioUnitario: 500,
//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         marca: "Rigel",
//         presentacion: "Bidón",
//         umc: 5, /*presentación*/
//         precioPorPack: 5000 /* $ segun umc */,
//         precioUnitario: 1000,
//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         color: "Verde",
//         medida: "60x60x30",
//         presentacion: "Pack",
//         umc: 250, /*presentación*/
//         precioPorPack: 20500 /* $ segun umc */,
//         precioUnitario: 82,
//     }
// ]

// // /*en el metodo splice tenemos dos paramentros entre ()
// // el primer parametro : es el primer elemento a eliminar
// // el segundo parametro : es la cantidad de elementos a eliminar hacia adelante.*/
// // Tambien nos permite agregar elementos desde una posicion seleccionada. 1er parametros desde que posicion, 2do paramentro debe ser 0 que indica que no hay nada para eliminar, y los siguientes paramentros pueden ser Strings como el ejemplo siguiente


// // productos.splice(1,1); /* <-- El 1 indica selecciona p eliminar el jabon y el 1 indica eliminar solo el jabon*/
// // console.log(productos);


// // // productos.splice(1,2); /* <-- El 1 indica selecciona p eliminar el jabon y el 2 indica eliminar tambien hasta e incluso la bolsa*/
// // // console.log(productos);

// productos.splice(2,0,"Detergente"); /* <-- El 2 indica selecciona la posicion desde donde quiero agregar elementos. El 0 que no hay que eliminarlo, y "detergente" el elemento que se agrega en formato String */
// console.log(productos);

//? join() : genera un string con todos los elementos del array.
//! pa que sirve. investigar sobre crear un csv (comma-separated values), archivo apto excel. Nivel avanzado segun profe en 00.58.00 de clase arrays. info chat gpt.   


// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         marca: "Elite",
//         presentacion: "Pack",
//         umc: 40, /*presentación*/
//         precioPorPack: 20000 /* $ segun umc */,
//         precioUnitario: 500,
//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         marca: "Rigel",
//         presentacion: "Bidón",
//         umc: 5, /*presentación*/
//         precioPorPack: 5000 /* $ segun umc */,
//         precioUnitario: 1000,
//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         color: "Verde",
//         medida: "60x60x30",
//         presentacion: "Pack",
//         umc: 250, /*presentación*/
//         precioPorPack: 20500 /* $ segun umc */,
//         precioUnitario: 82,
//     }
// ]

// productos.join();
// console.log(productos);


//? Concat () : Combina arrays en uno. Dos o mas arrays en uno



// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",

//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",

//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",

//     }
// ];

// let productosEspeciales = [
//     {
//         categoria: "Trapos",
//         codigo: "00004",
//         descripcion: "Trapo de piso",

//     },
//     {
//         categoria: "Aromatizantes",
//         codigo: "00005",
//         descripcion: "Jabón líquido",

//     },
//     {
//         categoria: "Ceras y lustradores",
//         codigo: "00006",
//         descripcion: "Blem",

//     }
// ]

// let listaCompletaProductos= productos.concat(productosEspeciales);

// console.log(listaCompletaProductos);


//? slice ( : genera una copia de una parte del array original. )



// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",

//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",

//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",

//     },

//     {
//         categoria: "Trapos",
//         codigo: "00004",
//         descripcion: "Trapo de piso",

//     },
//     {
//         categoria: "Desodorantes / Desinfectantes líquidos",
//         codigo: "00005",
//         descripcion: "Desodorante Cherry ",

//     },
//     {
//         categoria: "Ceras y lustradores",
//         codigo: "00006",
//         descripcion: "Blem pisos plastificados",

//     }
// ]

// /*primer parametro es el indice del primer elemento a extraer
//   segundo parametro es el indice del elemento siguiente al que vamos a extraer*/

// let productosPiso = productos.slice(3, 6);

// console.log(productosPiso);


//? indexOf () : Devuelve el índice de un elemento del array 

//! El profe lo explica con valores String dentro del array. Con objetos no me sale. Cuando no da resultado indica en consola -1, Si da el resultado indica en consola en nro de la posicion en indice. Buscar como aplicar con objetos y ver si realmente es aplicativo / útil. Se me ocurre para que traiga como resultado los que estan vinculados ej: productos para piso 


// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",

//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",

//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",

//     },

//     {
//         categoria: "Trapos",
//         codigo: "00004",
//         descripcion: "Trapo de piso",

//     },
//     {
//         categoria: "Desodorantes / Desinfectantes líquidos",
//         codigo: "00005",
//         descripcion: "Desodorante Cherry ",

//     },
//     {
//         categoria: "Ceras y lustradores",
//         codigo: "00006",
//         descripcion: "Blem pisos plastificados",

//     }
// ]

// console.log(productos.indexOf("Trapos"));



//? includes () : Devuelve true si el elemento esta en el array, false si no esta. 

//! Mismas situacion anterior respecto a los objetos. Investigar


// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",

//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",

//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",

//     },

//     {
//         categoria: "Trapos",
//         codigo: "00004",
//         descripcion: "Trapo de piso",

//     },
//     {
//         categoria: "Desodorantes / Desinfectantes líquidos",
//         codigo: "00005",
//         descripcion: "Desodorante Cherry ",

//     },
//     {
//         categoria: "Ceras y lustradores",
//         codigo: "00006",
//         descripcion: "Blem pisos plastificados",

//     }
// ]

// console.log(productos.includes("Trapos"));




//? VER 01.12.29 EJEMPLO CON VARIOS METODOS INCLUIDOS Grabación ...


//? Reverse() : da vuelta el array... 

//? CONCEPTOS DE METODOS "DESTRUCTIVOS"  (que modifican el array original quita elementos) Y LOS NO ...

//?LOS MAS USADOS, propiedades de los Metodos 01.17.00

// let productos = [
//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",

//     },
//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",

//     },
//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",

//     },

//     {
//         categoria: "Trapos",
//         codigo: "00004",
//         descripcion: "Trapo de piso",

//     },
//     {
//         categoria: "Desodorantes / Desinfectantes líquidos",
//         codigo: "00005",
//         descripcion: "Desodorante Cherry ",

//     },
//     {
//         categoria: "Ceras y lustradores",
//         codigo: "00006",
//         descripcion: "Blem pisos plastificados",

//     }
// ]

// console.log(productos.includes("Trapos"));


/* ********ARRAYS CON OBJETOS ****/
//? Metodos y propiedades

//? Ciclio for .. of


// let todosLosProductos = [


//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",

//     },

//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",

//     },

//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",

//     },

//     {
//         categoria: "Trapos",
//         codigo: "00004",
//         descripcion: "Trapo de piso",

//     },

//     {
//         categoria: "Desodorantes / Desinfectantes líquidos",
//         codigo: "00005",
//         descripcion: "Desodorante Cherry ",

//     },

//     {
//         categoria: "Ceras y lustradores",
//         codigo: "00006",
//         descripcion: "Blem pisos plastificados",

//     }
// ]


// for (let producto of todosLosProductos) {
//     console.log(producto.descripcion);
// }


//? CLASS DE OBJETO Y ARRAY


/*********************************************************** */
/**************  FUNCIONES DE ORDEN SUPERIOR   ***************/
/*********************************************************** */

//? METODOS DE BUSQUEDA Y TRANSFORMACION DE ARRAYS

//? forEach () : Nos permite recorrer el array y nos permite ejecutar algunas acciones sobre los elementos

//? el primer parametro representa a cada elemento del array
//? el segundo parametro es opcional, representa al indice de cada elemento del array


// let todosLosProductos = [


//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",

//     },

//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",

//     },

//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",

//     },

// ]

//    todosLosProductos.forEach((producto, index) => {
//     console.log(index, producto.descripcion);
// })


//?find () : Reccore el array y nos retorna el prmimer elemento que coincida con la condicion que le pongamos


// let todosLosProductos = [


//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",

//     },

//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",

//     },

//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",

//     },

// ]

// let productoEncontrado = todosLosProductos.find((producto) => producto.descripcion === "Jabón líquido");

// console.log(productoEncontrado);

//? filter() : recorre el array y nos retorna un nuevo array con todos los elementos del array original que coincida con la condicion que le pasemos.

// let todosLosProductos = [


//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",

//     },

//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",

//     },

//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",

//     },

// ]

// let productoEncontrado = todosLosProductos.filter((producto) => producto.descripcion === "Bolsa");

// console.log(productoEncontrado);

//? some() : parecido al find, pero recorre el array y nos retorna true o false (no el valor como find) dependiendo de si encuentra o no un elemento que coincida con la condicion que le ponemos


// let todosLosProductos = [


//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",

//     },

//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",

//     },

//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",

//     },

// ]

// let productoEncontrado = todosLosProductos.some((producto) => producto.descripcion === "Bolsa");

// console.log(productoEncontrado);

//? map(): recorre el array y retorna un nuevo array con la misma cantidad de elementos que el original pero extrayendo o modificado algunas cosas 



// let todosLosProductos = [


//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         umc: 40,
//         precio: 20000,

//     },

//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         umc: 5,
//         precio: 5000,

//     },

//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         umc: 250,
//         precio: 12500,

//     },

// ]

// let productoEncontrado = todosLosProductos.map(producto => {
//     return {
//         producto: producto.descripcion,
//         umc: producto.umc,
//         precio: producto.precio,
//     }
// })

// console.log(productoEncontrado);

// let productoDosPorUno = todosLosProductos.map(producto => {
//     return {
//         descripcion: producto.descripcion,
//         umc: producto.umc * 2,
//         precio:producto.precio,
//     }
    
    
// })

// console.log(productoDosPorUno)



//?  reduce() : recorre el array y trae un valor unico tras recorrerlo


// let todosLosProductos = [


//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         umc: 40,
//         precio: 20000,

//     },

//     {
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         umc: 5,
//         precio: 5000,

//     },

//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         umc: 250,
//         precio: 12500,

//     },

// ]

// let sumaPrecioDeTodosLosProd = todosLosProductos.reduce((acc, producto)=> acc + producto.precio, 0);

// console.log(sumaPrecioDeTodosLosProd)

//? sort() :  Reordena el array. Por numero y alfabeticamente desde la logica booleana del true o false desde la comparativa de numeros y si resultado de resta da negativa lo ordena. Orden por numero se da esa logica, orden albabetico hay que aplicar un considional con valores numericos para que lo adapte a la logica y pueda ordenar 01.17.00 de clase mejor explicado

// let todosLosProductos = [


//     {
//         categoria: "Papeles Higienicos y Toallas",
//         codigo: "00001",
//         descripcion: "Papel Higienico",
//         umc: 40,
//         precio: 20000,

//     },

//     { 
//         categoria: "Jabones Líquidos",
//         codigo: "00002",
//         descripcion: "Jabón líquido",
//         umc: 5,
//         precio: 5000,

//     },

//     {
//         categoria: "Bolsas",
//         codigo: "00003",
//         descripcion: "Bolsa",
//         umc: 250,
//         precio: 12500,

//     },

// ]


// // /*ordenar nro de menor a mayor*/
// // todosLosProductos.sort((a , b) => a.precio - b.precio );

// // console.log(todosLosProductos)

// /*orden alfabetico*/
// todosLosProductos.sort((a,b) => {
//     if (a.descripcion > b.descripcion){
//         return 1;
//     } else if (a.descripcion < b.descripcion) {
//         return -1;
//     } else {
//         return 0;
//     }
//     })

// console.log(todosLosProductos);


/***************************************************************************** */
/**********************           DOM             ******************************/
/***************************************************************************** */


//! Metodos de accesos a elementos que Carpi no usa
// let nominaProductos = document.getElementById("nominaproductos");
// console.log(nominaProductos);
 
//let nominaProductos = document.getElementsByClassName("producto");
// console.log(nominaProductos);


// let nominaProductos = document.getElementsByClassName("producto");
// for (let producto of nominaProductos) {
//     console.log(producto)
// }

// let nominaProductos = document.getElementsByTagName("li");
// console.log(nominaProductos);

//!Metodos de acceso a elementos (un poco mas modernos)

// let nominaProductos = document.querySelector(".producto");
// console.log(nominaProductos);

// let nominaProductos = document.querySelectorAll (".producto");
// console.log(nominaProductos);

//? innerText : Representa al contenido textual, contenido interno de texto de ese elemento


// let nominaProductos = document.querySelector(".producto");
// console.log(nominaProductos.innerText);

// let nominaProductos = document.querySelector(".producto");

// let producto = prompt("Seleccione un producto");
// nominaProductos.innerText = "Seleccionaste " + producto;

//? innerHtml : Acepta etiquetas HTML (Ej.: <em> </em> para letra cursiva)

// let producto = prompt("Seleccione un producto");
// nominaProductos.innerHTML = "Seleccionaste, <em> " + producto + "</em>";

//? Agregar o quitar nodos



// let producto = document.createElement("li");
// nominaproductos.innerText= "Seleccione su producto";

// document.body.append(producto);

// let seccion= document.querySelector("#seccion");

// let producto = document.createElement("li");
// nominaproductos.innerText= "Seleccione su producto";

// seccion.append(producto);


// let seccion = document.querySelector("#seccion");

// let productos= [
//     {
//       categoria: "Papeles Higienicos y Toallas",
//       codigo: "00001",
//       descripcion: "Papel Higienico",
//       presentacion: "Pack",
//       umc: 40,
//       precioPorUmc: 20000,
//       precioUnitario: 20000 / 40,
//     },
//     {
//       categoria: "Jabones Líquidos",
//       codigo: "00002",
//       descripcion: "Jabón líquido",
//       presentacion: "Bidón",
//       umc: 5,
//       precioPorUmc: 5000,
//       precioUnitario: 5000 / 5,
//     },
//     {
//       categoria: "Bolsas",
//       codigo: "00003",
//       descripcion: "Bolsa",
//       presentacion: "Pack",
//       umc: 250,
//       precioPorUmc: 12500,
//       precioUnitario: 12500 / 250,
//     },
// ];

// let lista= document.createElement("ul");
// lista.innerHTML= `
// <li>${productos[0]}</li>
// <li>${productos[1]}</li>
// <li>${productos[2]}</li>
// `;

// seccion.append(lista);

let seccion = document.querySelector("#seccion");

let productos= [
    {
      categoria: "Papeles Higienicos y Toallas",
      codigo: "00001",
      descripcion: "Papel Higienico",
      presentacion: "Pack",
      umc: 40,
      precioPorUmc: 20000,
      precioUnitario: 20000 / 40,
    },
    {
      categoria: "Jabones Líquidos",
      codigo: "00002",
      descripcion: "Jabón líquido",
      presentacion: "Bidón",
      umc: 5,
      precioPorUmc: 5000,
      precioUnitario: 5000 / 5,
    },
    {
      categoria: "Bolsas",
      codigo: "00003",
      descripcion: "Bolsa",
      presentacion: "Pack",
      umc: 250,
      precioPorUmc: 12500,
      precioUnitario: 12500 / 250,
    },
];

let lista= document.createElement("ul");
productos.forEach((producto) => {
    let item= document.createElement("li");
    item.innerText=producto.descripcion + " " + producto.presentacion + " de " + producto.umc + " " + " $" + producto.precioPorUmc;
    lista.append(item);


} )

seccion.append(lista);

/******************************************************* */
/**************       EVENTOS                *********** */
/******************************************************** */

//? addEventListener ( evento ,funcion )

/*********************************************/

const baseDatos =[ /*seria nomina de productos*/
    {
        categoria: "Papeles Higienicos y Toallas",
        codigo: "PH001",
        descripcion: "Papel Higienico",
        presentacion: "Pack",
        umc: 40,
        precioPorUmc: 20000,
        precioUnitario: 20000 / 40,
      },
      {
        categoria: "Papeles Higienicos y Toallas",
        codigo: "TOA001",
        descripcion: "Toalla de papel",
        presentacion: "Pack",
        umc: 2,
        precioPorUmc: 14000,
        precioUnitario: 14000 / 2,
      },
      {
        categoria: "Jabones Líquidos",
        codigo: "00002",
        descripcion: "Jabón líquido",
        presentacion: "Bidón",
        umc: 5,
        precioPorUmc: 5000,
        precioUnitario: 5000 / 5,
      },
      {
        categoria: "Bolsas",
        codigo: "00003",
        descripcion: "Bolsa",
        presentacion: "Pack",
        umc: 250,
        precioPorUmc: 12500,
        precioUnitario: 12500 / 250,
      },
      {
        categoria: "Trapos",
        codigo: "00004",
        descripcion: "Trapo de piso",
        presentacion: "Unidad",
        umc: 1,
        precioPorUmc: 1000,
        precioUnitario: 1000 / 1,
      },
      {
        categoria: "Desodorantes / Desinfectantes líquidos",
        codigo: "00005",
        descripcion: "Desodorante Cherry",
        presentacion: "Bidón",
        umc: 5,
        precioPorUmc: 6500,
        precioUnitario: 6500 / 5,
      },
      {
        categoria: "Ceras y lustradores",
        codigo: "00006",
        descripcion: "Blem pisos plastificados",
        presentacion: "Bidón",
        umc: 5,
        precioPorUmc: 18000,
        precioUnitario: 18000 / 5,
      },

 ]

 const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
         setTimeout(() => {
            resolve (baseDatos);
         }, 1500); 
    })
 }

