/* Verificar la validez de la cantidad ingresada. Ingresar un bucle que
repita el ingreso del numero por prompt en caso de ingresar otro valor que
no sea un numero o numero % 5 !== 0). Que finalice el bucle solo si el usuario
ingresa "no"*/

/* Funciona el bucle infinito siempre y unicamente ingresando valores correctos,
nro divisible por 5, o por "si" o por "no" . Si ingreso un valor incorrecto se define 
el ciclo del bucle, y saltea el ciclo while, dando como resultado un  numero 
divisible por 5 en caso de haberlo ingresado, un 0 en caso de no haber
registrado el ingreso de un valor true 
(valor false=nros no divisibles 5, letras, espacios, esc, o enter)  ...  */


// let numero = parseInt(prompt("Ingrese cantidad (en litros):"), 10);
// let suma = 0;


// if (isNaN(numero) || numero % 5 !== 0) {
//     console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
// } else {
//     suma = numero;
//     console.log("La cantidad ingresada es de " + suma + " lts.");
// }

// // Bucle para sumar más cantidades si el usuario lo desea
// let deseaSumar = prompt("Desea sumar otra cantidad? (si/no)");

// while (deseaSumar.toLowerCase() === "si") {
//     let cantidadAdicional = parseInt(prompt("Ingrese cantidad adicional (en litros):"), 10);

//     if (isNaN(cantidadAdicional) || cantidadAdicional % 5 !== 0) {
//         console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
//     } else {
//         suma += cantidadAdicional;
//         console.log("La cantidad total es de " + suma + " lts.");
//     }

//     deseaSumar = prompt("Desea sumar otra cantidad? (si/no)");
// }

// // Mostrar el total final
// console.log("La cantidad final es de " + suma + " lts.");


//! ENCAMINANDO SEGUNDA PRE ENTREGA

// let nominaProductos = [

    
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


// for (let producto of nominaProductos) {
//     console.log(producto.descripcion);
// }


// let seleccionProducto = prompt("Selecione su producto")


// /*Necesito que en el promp aparezcan como alert todos los productos para luego poder seleccionar uno*/

// let nominaProductos = [
//     {
//       categoria: "Papeles Higienicos y Toallas",
//       codigo: "00001",
//       descripcion: "Papel Higienico",
//     },
//     {
//       categoria: "Jabones Líquidos",
//       codigo: "00002",
//       descripcion: "Jabón líquido",
//     },
//     {
//       categoria: "Bolsas",
//       codigo: "00003",
//       descripcion: "Bolsa",
//     },
//     {
//       categoria: "Trapos",
//       codigo: "00004",
//       descripcion: "Trapo de piso",
//     },
//     {
//       categoria: "Desodorantes / Desinfectantes líquidos",
//       codigo: "00005",
//       descripcion: "Desodorante Cherry",
//     },
//     {
//       categoria: "Ceras y lustradores",
//       codigo: "00006",
//       descripcion: "Blem pisos plastificados",
//     },
//   ];
  
//   // Construir un mensaje con todos los productos
//   let mensajeProductos = "Lista de productos disponibles:\n\n";
//   for (let i = 0; i < nominaProductos.length; i++) {
//     mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo})\n`;
//   }
  
//   // Mostrar la lista de productos en una alerta
//   alert(mensajeProductos);
  
//   // Solicitar al usuario que seleccione un producto por su número
//   let seleccionProducto = prompt("Seleccione su producto escribiendo el número correspondiente:" + nominaProductos.descripcion);
  
//   // Convertir la selección a un número y ajustar el índice
//   let indiceSeleccionado = parseInt(seleccionProducto) - 1;
  
//   // Validar si la selección es válida
//   if (indiceSeleccionado >= 0 && indiceSeleccionado < nominaProductos.length) {
//     let productoSeleccionado = nominaProductos[indiceSeleccionado];
//     alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//   } else {
//     alert("Selección no válida. Inténtelo de nuevo.");
//   }
  
/*necesito que los productos aparezcan en el mismo cuadro del prompt*/

// let nominaProductos = [
//     {
//       categoria: "Papeles Higienicos y Toallas",
//       codigo: "00001",
//       descripcion: "Papel Higienico",
//     },
//     {
//       categoria: "Jabones Líquidos",
//       codigo: "00002",
//       descripcion: "Jabón líquido",
//     },
//     {
//       categoria: "Bolsas",
//       codigo: "00003",
//       descripcion: "Bolsa",
//     },
//     {
//       categoria: "Trapos",
//       codigo: "00004",
//       descripcion: "Trapo de piso",
//     },
//     {
//       categoria: "Desodorantes / Desinfectantes líquidos",
//       codigo: "00005",
//       descripcion: "Desodorante Cherry",
//     },
//     {
//       categoria: "Ceras y lustradores",
//       codigo: "00006",
//       descripcion: "Blem pisos plastificados",
//     },
//   ];
  
//   // Construir un mensaje con todos los productos
//   let mensajeProductos = "Lista de productos disponibles:\n\n";
//   for (let i = 0; i < nominaProductos.length; i++) {
//     mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo})\n`;
//   }
  
//   // Solicitar al usuario que seleccione un producto por su número dentro del prompt
//   let seleccionProducto = prompt(
//     `${mensajeProductos}\nSeleccione su producto escribiendo el número correspondiente:`
//   );
  
//   // Convertir la selección a un número y ajustar el índice
//   let indiceSeleccionado = parseInt(seleccionProducto) - 1;
  
//   // Validar si la selección es válida
//   if (indiceSeleccionado >= 0 && indiceSeleccionado < nominaProductos.length) {
//     let productoSeleccionado = nominaProductos[indiceSeleccionado];
//     alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//   } else {
//     alert("Selección no válida. Inténtelo de nuevo.");
//   }
  
// /* si la seleccion es invalida considerando como invalida cualquier valor que no coincida con en el indice del producto a seleccionar,  repetir ciclo hasta que se ingrese una selecion valida*/

// let nominaProductos = [
//     {
//       categoria: "Papeles Higienicos y Toallas",
//       codigo: "00001",
//       descripcion: "Papel Higienico",
//     },
//     {
//       categoria: "Jabones Líquidos",
//       codigo: "00002",
//       descripcion: "Jabón líquido",
//     },
//     {
//       categoria: "Bolsas",
//       codigo: "00003",
//       descripcion: "Bolsa",
//     },
//     {
//       categoria: "Trapos",
//       codigo: "00004",
//       descripcion: "Trapo de piso",
//     },
//     {
//       categoria: "Desodorantes / Desinfectantes líquidos",
//       codigo: "00005",
//       descripcion: "Desodorante Cherry",
//     },
//     {
//       categoria: "Ceras y lustradores",
//       codigo: "00006",
//       descripcion: "Blem pisos plastificados",
//     },
//   ];
  
//   Construir un mensaje con todos los productos
//   let mensajeProductos = "Lista de productos disponibles:\n\n";
//   for (let i = 0; i < nominaProductos.length; i++) {
//     mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo})\n`;
//   }
  
//   let seleccionProducto;
//   let indiceSeleccionado;
//   let productoSeleccionado;
  
//   Repetir hasta que la selección sea válida
//   do {
//     Solicitar al usuario que seleccione un producto por su número dentro del prompt
//     seleccionProducto = prompt(
//       `${mensajeProductos}\nSeleccione su producto escribiendo el número correspondiente:`
//     );
  
//     Convertir la selección a un número y ajustar el índice
//     indiceSeleccionado = parseInt(seleccionProducto) - 1;
  
//     Validar si la selección es válida
//     if (indiceSeleccionado >= 0 && indiceSeleccionado < nominaProductos.length) {
//       productoSeleccionado = nominaProductos[indiceSeleccionado];
//       alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//     } else {
//       alert("Selección no válida. Inténtelo de nuevo.");
//     }
//   } while (indiceSeleccionado < 0 || indiceSeleccionado >= nominaProductos.length);


// let nominaProductos = [
//     {
//       categoria: "Papeles Higienicos y Toallas",
//       codigo: "00001",
//       descripcion: "Papel Higienico",
//     },
//     {
//       categoria: "Jabones Líquidos",
//       codigo: "00002",
//       descripcion: "Jabón líquido",
//     },
//     {
//       categoria: "Bolsas",
//       codigo: "00003",
//       descripcion: "Bolsa",
//     },
//     {
//       categoria: "Trapos",
//       codigo: "00004",
//       descripcion: "Trapo de piso",
//     },
//     {
//       categoria: "Desodorantes / Desinfectantes líquidos",
//       codigo: "00005",
//       descripcion: "Desodorante Cherry",
//     },
//     {
//       categoria: "Ceras y lustradores",
//       codigo: "00006",
//       descripcion: "Blem pisos plastificados",
//     },
//   ];
  
//   // Construir un mensaje con todos los productos
//   let mensajeProductos = "Lista de productos disponibles:\n\n";
//   for (let i = 0; i < nominaProductos.length; i++) {
//     mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo})\n`;
//   }
  
//   let seleccionProducto;
//   let indiceSeleccionado;
  
//   // Repetir hasta que la selección sea válida
//   while (true) {
//     // Solicitar al usuario que seleccione un producto por su número dentro del prompt
//     seleccionProducto = prompt(
//       `${mensajeProductos}\nSeleccione su producto escribiendo el número correspondiente:`
//     );
  
//     // Convertir la selección a un número y ajustar el índice
//     indiceSeleccionado = parseInt(seleccionProducto) - 1;
  
//     // Verificar si la selección es un número y si está dentro de los límites del array
//     if (!isNaN(indiceSeleccionado) && indiceSeleccionado >= 0 && indiceSeleccionado < nominaProductos.length) {
//       let productoSeleccionado = nominaProductos[indiceSeleccionado];
//       alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//       break; // Salir del bucle ya que la selección es válida
//     } else {
//       alert("Selección no válida. Inténtelo de nuevo.");
//     }
//   }
    
//   let suma = 0;

// // Función para verificar la validez del número
// function esValido(numero) {
//     return !isNaN(numero) && numero % 5 === 0;
// }

// // Función para ingresar una cantidad válida
// function ingresarCantidad(mensaje) {
//     let cantidad;
//     do {
//         cantidad = parseInt(prompt(mensaje), 10);
//         if (!esValido(cantidad)) {
//             console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
//             alert ("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
//         }
//     } while (!esValido(cantidad));
//     return cantidad;
// }

// // Ingreso inicial
// let numero = ingresarCantidad("Ingrese cantidad (en litros):");
// suma += numero;
// console.log("La cantidad inicial es de " + suma + " lts.");

// // Bucle para sumar más cantidades si el usuario lo desea
// let deseaSumar;
// do {
//     deseaSumar = prompt("Desea sumar otra cantidad? (si/no)").toLowerCase();
//     if (deseaSumar === "si") {
//         let cantidadAdicional = ingresarCantidad("Ingrese cantidad adicional (en litros):");
//         suma += cantidadAdicional;
//         console.log("La cantidad total es de " + suma + " lts.");
//         alert ("Van sumados " + suma + " lts. en su pedido");
//     } else if (deseaSumar !== "no") {
//         console.log("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//         alert ("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//     }
// } while (deseaSumar !== "no");

// // Mostrar el total final
// console.log("La cantidad final es de " + suma + " lts.");
// alert ("La cantidad final es de " + suma + " lts.")

// /*como combinar el codigo para que al seleccionar un producto me 
// pida ingresar que cantidad quiero segun su umc (unidad de medida comercial) y luego pida si quiero ingresar mas cantidad del producto seleccionado y/o me permita seleccionar otro producto y su cantidad, y asi sucesivamente hasta no desear seleccionar otro producto*/


// let nominaProductos = [
//     {
//       categoria: "Papeles Higienicos y Toallas",
//       codigo: "00001",
//       descripcion: "Papel Higienico",
//       presentacion: "Pack", 
//       umc: 40, 
//       precioPorUmc: 20000, 
//       precioUnitario: precioUnitario = precioPorUmc / umc,
//     },
//     {
//       categoria: "Jabones Líquidos",
//       codigo: "00002",
//       descripcion: "Jabón líquido",
//       presentacion: "Bidón", 
//       umc: 5, 
//       precioPorUmc: 5000, 
//       precioUnitario: precioUnitario = precioPorUmc / umc,
//     },
//     {
//       categoria: "Bolsas",
//       codigo: "00003",
//       descripcion: "Bolsa",
//       presentacion: "Pack", 
//       umc: 250, 
//       precioPorUmc: 12500, 
//       precioUnitario: precioUnitario = precioPorUmc / umc,
//     },
//     {
//       categoria: "Trapos",
//       codigo: "00004",
//       descripcion: "Trapo de piso",
//       presentacion: "Unidad", 
//       umc: 1, 
//       precioPorUmc: 1000, 
//       precioUnitario: precioUnitario = precioPorUmc / umc,
//     },
//     {
//       categoria: "Desodorantes / Desinfectantes líquidos",
//       codigo: "00005",
//       descripcion: "Desodorante Cherry",
//       presentacion: "Bidón", 
//       umc: 5, 
//       precioPorUmc: 6500, 
//       precioUnitario: precioUnitario = precioPorUmc / umc,
//     },
//     {
//       categoria: "Ceras y lustradores",
//       codigo: "00006",
//       descripcion: "Blem pisos plastificados",
//       presentacion: "Bidón", 
//       umc: 5, 
//       precioPorUmc: 18000,  
//       precioUnitario: precioUnitario = precioPorUmc / umc,
//     },
//   ];
  
//   // Función para mostrar productos y seleccionar uno
//   function seleccionarProducto() {
//     let mensajeProductos = "Lista de productos disponibles:\n\n";
//     for (let i = 0; i < nominaProductos.length; i++) {
//       mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo})\n`;
//     }
  
//     let seleccionProducto;
//     let indiceSeleccionado;
  
//     // Repetir hasta que la selección sea válida
//     while (true) {
//       // Solicitar al usuario que seleccione un producto por su número dentro del prompt
//       seleccionProducto = prompt(
//         `${mensajeProductos}\nSeleccione su producto escribiendo el número correspondiente:`
//       );
  
//       // Convertir la selección a un número y ajustar el índice
//       indiceSeleccionado = parseInt(seleccionProducto) - 1;
  
//       // Verificar si la selección es un número y si está dentro de los límites del array
//       if (!isNaN(indiceSeleccionado) && indiceSeleccionado >= 0 && indiceSeleccionado < nominaProductos.length) {
//         let productoSeleccionado = nominaProductos[indiceSeleccionado];
//         alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//         return productoSeleccionado; // Retornar el producto seleccionado
//       } else {
//         alert("Selección no válida. Inténtelo de nuevo.");
//       }
//     }
//   }
  
//   // Función para verificar la validez del número según UMC
//   function esValido(numero) {
//     return !isNaN(numero) && numero % 5 === 0;
//   }
  
//   // Función para ingresar una cantidad válida
//   function ingresarCantidad(mensaje) {
//     let cantidad;
//     do {
//       cantidad = parseInt(prompt(mensaje), 10);
//       if (!esValido(cantidad)) {
//         console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
//         alert("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
//       }
//     } while (!esValido(cantidad));
//     return cantidad;
//   }
  
//   // Iniciar proceso de selección y suma de productos
//   let continuar = true;
//   while (continuar) {
//     // Seleccionar producto
//     let productoSeleccionado = seleccionarProducto();
//     let suma = 0;
  
//     // Ingreso inicial de cantidad
//     let cantidad = ingresarCantidad(`Ingrese cantidad para ${productoSeleccionado.descripcion} (en litros):`);
//     suma += cantidad;
//     console.log(`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma} lts.`);
//     alert(`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma} lts.`);
  
//     // Bucle para sumar más cantidades si el usuario lo desea
//     let deseaSumar;
//     do {
//       deseaSumar = prompt("¿Desea sumar otra cantidad de este producto? (si/no)").toLowerCase();
//       if (deseaSumar === "si") {
//         let cantidadAdicional = ingresarCantidad(`Ingrese cantidad adicional para ${productoSeleccionado.descripcion} (en litros):`);
//         suma += cantidadAdicional;
//         console.log(`La cantidad total de ${productoSeleccionado.descripcion} es de ${suma} lts.`);
//         alert(`Van sumados ${suma} lts. en su pedido de ${productoSeleccionado.descripcion}`);
//       } else if (deseaSumar !== "no") {
//         console.log("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//         alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//       }
//     } while (deseaSumar !== "no");
  
//     // Preguntar si desea seleccionar otro producto
//     let deseaOtroProducto = prompt("¿Desea seleccionar otro producto? (si/no)").toLowerCase();
//     if (deseaOtroProducto !== "si") {
//       continuar = false;
//     }
//   }
  
//   // Mostrar el mensaje final de la cantidad total
//   console.log("Proceso finalizado.");
//   alert("Proceso finalizado.");
  
//  /*como combinar el codigo para que al seleccionar un producto me 
//  pida ingresar que cantidad quiero segun su umc (unidad de medida comercial) y luego pida si quiero ingresar mas cantidad del producto seleccionado y/o me permita seleccionar otro producto y su cantidad, y asi sucesivamente hasta no desear seleccionar otro producto. Al finalizar el proceso me muestre todas las selecciones de productos y las cantidades sumadas para cada producto seleccionado*/

// let nominaProductos = [
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
//     {
//       categoria: "Trapos",
//       codigo: "00004",
//       descripcion: "Trapo de piso",
//       presentacion: "Unidad",
//       umc: 1,
//       precioPorUmc: 1000,
//       precioUnitario: 1000 / 1,
//     },
//     {
//       categoria: "Desodorantes / Desinfectantes líquidos",
//       codigo: "00005",
//       descripcion: "Desodorante Cherry",
//       presentacion: "Bidón",
//       umc: 5,
//       precioPorUmc: 6500,
//       precioUnitario: 6500 / 5,
//     },
//     {
//       categoria: "Ceras y lustradores",
//       codigo: "00006",
//       descripcion: "Blem pisos plastificados",
//       presentacion: "Bidón",
//       umc: 5,
//       precioPorUmc: 18000,
//       precioUnitario: 18000 / 5,
//     },
//   ];
  
//   // Función para mostrar productos y seleccionar uno
//   function seleccionarProducto() {
//     let mensajeProductos = "Lista de productos disponibles:\n\n";
//     for (let i = 0; i < nominaProductos.length; i++) {
//       mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo})\n`;
//     }
  
//     let seleccionProducto;
//     let indiceSeleccionado;
  
//     // Repetir hasta que la selección sea válida
//     while (true) {
//       seleccionProducto = prompt(
//         `${mensajeProductos}\nSeleccione su producto escribiendo el número correspondiente:`
//       );
  
//       // Convertir la selección a un número y ajustar el índice
//       indiceSeleccionado = parseInt(seleccionProducto) - 1;
  
//       // Verificar si la selección es un número y si está dentro de los límites del array
//       if (!isNaN(indiceSeleccionado) && indiceSeleccionado >= 0 && indiceSeleccionado < nominaProductos.length) {
//         let productoSeleccionado = nominaProductos[indiceSeleccionado];
//         alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//         return productoSeleccionado; // Retornar el producto seleccionado
//       } else {
//         alert("Selección no válida. Inténtelo de nuevo.");
//       }
//     }
//   }
  
//   // Función para verificar la validez del número según UMC
//   function esValido(numero, umc) {
//     return !isNaN(numero) && numero % umc === 0;
//   }
  
//   // Función para ingresar una cantidad válida
//   function ingresarCantidad(mensaje, umc) {
//     let cantidad;
//     do {
//       cantidad = parseInt(prompt(mensaje), 10);
//       if (!esValido(cantidad, umc)) {
//         console.log(`Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de ${umc}.`);
//         alert(`Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de ${umc}.`);
//       }
//     } while (!esValido(cantidad, umc));
//     return cantidad;
//   }
  
//   // Lista para almacenar las selecciones de productos y cantidades
//   let resumenPedidos = [];
  
//   // Iniciar proceso de selección y suma de productos
//   let continuar = true;
//   while (continuar) {
//     // Seleccionar producto
//     let productoSeleccionado = seleccionarProducto();
//     let suma = 0;
  
//     // Ingreso inicial de cantidad
//     let cantidad = ingresarCantidad(
//       `Ingrese cantidad para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
//       productoSeleccionado.umc
//     );
//     suma += cantidad;
//     console.log(`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);
//     alert(`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);
  
//     // Bucle para sumar más cantidades si el usuario lo desea
//     let deseaSumar;
//     do {
//       deseaSumar = prompt("¿Desea sumar otra cantidad de este producto? (si/no)").toLowerCase();
//       if (deseaSumar === "si") {
//         let cantidadAdicional = ingresarCantidad(
//           `Ingrese cantidad adicional para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
//           productoSeleccionado.umc
//         );
//         suma += cantidadAdicional;
//         console.log(`La cantidad total de ${productoSeleccionado.descripcion} es de ${suma}.`);
//         alert(`Van sumados ${suma} en su pedido de ${productoSeleccionado.descripcion}`);
//       } else if (deseaSumar !== "no") {
//         console.log("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//         alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//       }
//     } while (deseaSumar !== "no");
  
//     // Guardar la selección en el resumen de pedidos
//     resumenPedidos.push({
//       producto: productoSeleccionado.descripcion,
//       cantidad: suma,
//       umc: productoSeleccionado.umc,
//       totalPrecio: (suma / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc,
//     });
  
//     // Preguntar si desea seleccionar otro producto
//     let deseaOtroProducto = prompt("¿Desea seleccionar otro producto? (si/no)").toLowerCase();
//     if (deseaOtroProducto !== "si") {
//       continuar = false;
//     }
//   }
  
//   // Mostrar el resumen de todos los productos seleccionados y sus cantidades
//   let mensajeFinal = "Resumen de su pedido:\n\n";
//   resumenPedidos.forEach((pedido, index) => {
//     mensajeFinal += `${index + 1}. ${pedido.producto}: ${pedido.cantidad} (${pedido.umc} por UMC) - Total: $${pedido.totalPrecio.toFixed(2)}\n`;
//   });
//   console.log(mensajeFinal);
//   alert(mensajeFinal);
  
//    /*como combinar el codigo para que al seleccionar un producto me 
//  pida ingresar que cantidad quiero segun su umc (unidad de medida comercial) y luego pida si quiero ingresar mas cantidad del producto seleccionado y/o me permita seleccionar otro producto y su cantidad, y asi sucesivamente hasta no desear seleccionar otro producto. Al finalizar el proceso me muestre todas las selecciones de productos y las cantidades sumadas para cada producto seleccionado, y me muestre la suma del precio final del pedido.*/



/**************************************************** */
/*                 SEGUNDA PREENTREGA                 */
/******************************************************/



/****************************************************** */

// // Array de Objetos, creados como nomina de productos disponibles.

// let nominaProductos = [
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
//     {
//       categoria: "Trapos",
//       codigo: "00004",
//       descripcion: "Trapo de piso",
//       presentacion: "Unidad",
//       umc: 1,
//       precioPorUmc: 1000,
//       precioUnitario: 1000 / 1,
//     },
//     {
//       categoria: "Desodorantes / Desinfectantes líquidos",
//       codigo: "00005",
//       descripcion: "Desodorante Cherry",
//       presentacion: "Bidón",
//       umc: 5,
//       precioPorUmc: 6500,
//       precioUnitario: 6500 / 5,
//     },
//     {
//       categoria: "Ceras y lustradores",
//       codigo: "00006",
//       descripcion: "Blem pisos plastificados",
//       presentacion: "Bidón",
//       umc: 5,
//       precioPorUmc: 18000,
//       precioUnitario: 18000 / 5,
//     },
//   ];
  


//   /* Función para mostrar productos y seleccionar uno. Invoca a variable mensajeProductos como una string usando  el recurso del caracter de escape \n para ajustar texto con saltos de líneas en prompt inicial (prompt y variable sleccionProducto ). También se creo una variable i que iteratúa, y suma en uno al recorrer con un ciclo for, hasta su limite maximo de contenido de objetos apelando al uso del metodo .lenght que retorna la cantidad de elementos que hay en el array de objetos devolviendo resultado visible en prompt como items enumerados, y trayecto como formato string tambien la descripcion del producto,codigo y precio. Tambien use template literals (plantillas literales) y backtips (que explico Carpi en clase DOM) en la construccion del mensaje (mensajeProductos) = a cada producto disponible*/

//   function seleccionarProducto() {
//     let mensajeProductos = "Lista de productos disponibles:\n\n";
//     for (let i = 0; i < nominaProductos.length; i++) {
//       mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo}) $ ${nominaProductos[i].precioPorUmc}\n`;
//     }
  
//     let seleccionProducto;
//     let indiceSeleccionado;
  
//     //Bucle para repetir hasta que la selección sea válida
//     while (true) {
//       seleccionProducto = prompt(
//         `${mensajeProductos}\nSeleccione su producto escribiendo el número correspondiente:`
//       );
  
//       // Convertir la selección a un número y ajustar el índice
//       indiceSeleccionado = parseInt(seleccionProducto) - 1;
  
//       // Verificar si la selección es un número y si está dentro de los límites del array
//       if (!isNaN(indiceSeleccionado) && indiceSeleccionado >= 0 && indiceSeleccionado < nominaProductos.length) {
//         let productoSeleccionado = nominaProductos[indiceSeleccionado];
//         alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//         return productoSeleccionado; // Retorna el producto seleccionado
//       } else {
//         alert("Selección no válida. Inténtelo de nuevo.");
//       }
//     }
//   }
  
//   // Función para verificar la validez del número según UMC (Unidad de medida comercial)
//   function esValido(numero, umc) {
//     return !isNaN(numero) && numero % umc === 0;
//   }
  
//   // Función para ingresar una cantidad válida segun la umc 
//   function ingresarCantidad(mensaje, umc) {
//     let cantidad;
//     do {
//       cantidad = parseInt(prompt(mensaje), 10);
//       if (!esValido(cantidad, umc)) {
//         console.log(`Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de ${umc}.`);
//         alert(`Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de ${umc}.`);
//       }
//     } while (!esValido(cantidad, umc));
//     return cantidad;
//   }
  
//   // Lista para almacenar las selecciones de productos y cantidades
//   let resumenPedidos = [];
  
//   // Iniciar proceso de selección y suma de productos
//   let continuar = true;
//   while (continuar) {
//     // Seleccionar producto
//     let productoSeleccionado = seleccionarProducto();
//     let suma = 0;
  
//     // Ingreso inicial de cantidad
//     let cantidad = ingresarCantidad(
//       `Ingrese cantidad para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
//       productoSeleccionado.umc
//     );
//     suma += cantidad;
//     console.log(`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);
//     alert(`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);
  
//     // Bucle para sumar más cantidades si el usuario lo desea
//     let deseaSumar;
//     do {
//       deseaSumar = prompt("¿Desea sumar otra cantidad de este producto? (si/no)").toLowerCase();
//       if (deseaSumar === "si") {
//         let cantidadAdicional = ingresarCantidad(
//           `Ingrese cantidad adicional para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
//           productoSeleccionado.umc
//         );
//         suma += cantidadAdicional;
//         console.log(`La cantidad total de ${productoSeleccionado.descripcion} es de ${suma}.`);
//         alert(`Van sumados ${suma} en su pedido de ${productoSeleccionado.descripcion}`);
//       } else if (deseaSumar !== "no") {
//         console.log("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//         alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//       }
//     } while (deseaSumar !== "no");
  
//     /* Guarda la selección en el resumen de pedidos a traves de metodo push que
//       permite ir agragando al final de un nuevo array*/
//     resumenPedidos.push({
//       producto: productoSeleccionado.descripcion,
//       cantidad: suma,
//       umc: productoSeleccionado.umc,
//       totalPrecio: (suma / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc,
//     });
  
//     // Preguntar si desea seleccionar otro producto
//     //! Aca el codigo falla. No es exclusiva la rta del si o del no. Si pongo un numero o letra cualquiera. Hay que plantear la misma condicion que se plantea en la seleccion del producto y en la select de la cantidads
//   //   let deseaOtroProducto = prompt("¿Desea seleccionar otro producto? (si/no)").toLowerCase();
//   //   if (deseaOtroProducto !== "si") {
//   //     continuar = false;
//   //   }
//   // }

// // Preguntar si desea seleccionar otro producto
// let deseaOtroProducto;

// // Bucle para asegurar que solo se acepten respuestas válidas ("si" o "no")
// do {
//   deseaOtroProducto = prompt("¿Desea seleccionar otro producto? (si/no)").toLowerCase();
  
//   // Verificar si la respuesta no es válida
//   if (deseaOtroProducto !== "si" && deseaOtroProducto !== "no") {
//     console.log("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//     alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//   }
  
// } while (deseaOtroProducto !== "si" && deseaOtroProducto !== "no");

// // Continuar o detener según la respuesta
// if (deseaOtroProducto === "no") {
//   continuar = false;
// }
//   }

  
//   // Calcular el precio total del pedido con metodo reduce utilizando como parametro acumulador "total" recorre el array y trae un valor unico tras recorrerlo.
   
//   let precioFinal = resumenPedidos.reduce((total, pedido) => total + pedido.totalPrecio, 0);
  
//   /* Mostrar el resumen de todos los productos seleccionados y sus cantidades usando forEach para recorrer y traer de vuelta toda la informacion recolectada en la  iteración que hubo con la variable remuenPedidos (todas las selecciones de productos y sus cantidades) y devolver el precio final del pedido. */

//   let mensajeFinal = "Resumen de su pedido:\n\n";
//   resumenPedidos.forEach((pedido, index) => {
//     mensajeFinal += `${index + 1}. ${pedido.producto}: ${pedido.cantidad} (${pedido.umc} por UMC) - Total: $${pedido.totalPrecio.toFixed(2)}\n`;
//   });
//   mensajeFinal += `\nPrecio final del pedido: $${precioFinal.toFixed(2)}`;
  
//   console.log(mensajeFinal);
//   alert(mensajeFinal);
  
 
/********************************************************************** */
//ARRAY DE OBJETOS

// let nominaProductos = [
//   {
//     categoria: "Papeles Higienicos y Toallas",
//     codigo: "00001",
//     descripcion: "Papel Higienico",
//     presentacion: "Pack",
//     umc: 40,
//     precioPorUmc: 20000,
//     precioUnitario: 20000 / 40,
//   },
//   {
//     categoria: "Jabones Líquidos",
//     codigo: "00002",
//     descripcion: "Jabón líquido",
//     presentacion: "Bidón",
//     umc: 5,
//     precioPorUmc: 5000,
//     precioUnitario: 5000 / 5,
//   },
//   {
//     categoria: "Bolsas",
//     codigo: "00003",
//     descripcion: "Bolsa",
//     presentacion: "Pack",
//     umc: 250,
//     precioPorUmc: 12500,
//     precioUnitario: 12500 / 250,
//   },
//   {
//     categoria: "Trapos",
//     codigo: "00004",
//     descripcion: "Trapo de piso",
//     presentacion: "Unidad",
//     umc: 1,
//     precioPorUmc: 1000,
//     precioUnitario: 1000 / 1,
//   },
//   {
//     categoria: "Desodorantes / Desinfectantes líquidos",
//     codigo: "00005",
//     descripcion: "Desodorante Cherry",
//     presentacion: "Bidón",
//     umc: 5,
//     precioPorUmc: 6500,
//     precioUnitario: 6500 / 5,
//   },
//   {
//     categoria: "Ceras y lustradores",
//     codigo: "00006",
//     descripcion: "Blem pisos plastificados",
//     presentacion: "Bidón",
//     umc: 5,
//     precioPorUmc: 18000,
//     precioUnitario: 18000 / 5,
//   },
// ];

// // Función para cancelar la compra y reiniciar el proceso en caso de que el usuario presione cancelar en el prompt. 

// function cancelarOperacion() {
//   alert("Operación cancelada.");


//   resumenPedidos = []; // Reiniciar los pedidos al cancelar
//   continuar = false; // Detener el bucle principal
//   return null; // Retorna null para detener la ejecución en la función donde se llama
// }

// //   /* Función para mostrar productos y seleccionar uno. Invoca a variable mensajeProductos como una string usando  el recurso del caracter de escape \n para ajustar texto con saltos de líneas en prompt inicial (prompt y variable sleccionProducto ). También se creo una variable i que iteratúa, y suma en uno al recorrer con un ciclo for, hasta su limite maximo de contenido de objetos apelando al uso del metodo .lenght que retorna la cantidad de elementos que hay en el array de objetos devolviendo resultado visible en prompt como items enumerados, y trayecto como formato string tambien la descripcion del producto,codigo y precio. Tambien use template literals (plantillas literales) y backtips (que explico Carpi en clase DOM) en la construccion del mensaje (mensajeProductos) = a cada producto disponible*/
// function seleccionarProducto() {
//   let mensajeProductos = "Lista de productos disponibles:\n\n";
//   for (let i = 0; i < nominaProductos.length; i++) {
//     mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo}) $ ${nominaProductos[i].precioPorUmc}\n`;
//   }

//   let seleccionProducto;
//   let indiceSeleccionado;

//   // Bucle para repetir hasta que la selección sea válida
//   while (true) {
//     seleccionProducto = prompt(
//       `${mensajeProductos}\nSeleccione su producto escribiendo el número correspondiente:`
//     );

//     // Verificar si el usuario canceló la operación
//     if (seleccionProducto === null) return cancelarOperacion();

//     indiceSeleccionado = parseInt(seleccionProducto) - 1;

//     // Verificar si la selección es válida
//     if (
//       !isNaN(indiceSeleccionado) &&
//       indiceSeleccionado >= 0 &&
//       indiceSeleccionado < nominaProductos.length
//     ) {
//       let productoSeleccionado = nominaProductos[indiceSeleccionado];
//       console.log(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//       alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//       return productoSeleccionado;
//     } else {
//       alert("Selección no válida. Inténtelo de nuevo.");
//     }
//   }
// }

// // Función para verificar la validez de la cantidad
// function esValido(numero, umc) {
//   return !isNaN(numero) && numero % umc === 0;
// }

// // Función para ingresar una cantidad válida
// function ingresarCantidad(mensaje, umc) {
//   let cantidad;
//   do {
//     cantidad = prompt(mensaje);
//     // Verificar si el usuario canceló la operación
//     if (cantidad === null) return cancelarOperacion();
//     cantidad = parseInt(cantidad, 10);
//     if (!esValido(cantidad, umc)) {
//       console.log (`Cantidad incorrecta. La UMC es de ${umc}.`);
//       alert(`Cantidad incorrecta. La UMC es de ${umc}.`);
//     }
//   } while (!esValido(cantidad, umc));
//   return cantidad;
// }

// // Lista para almacenar los pedidos
// let resumenPedidos = [];

// // Iniciar el proceso de compra
// let continuar = true;
// while (continuar) {
//   // Selección del producto
//   let productoSeleccionado = seleccionarProducto();
//   if (!productoSeleccionado) break;

//   let suma = 0;
//   let cantidad = ingresarCantidad(
//     `Ingrese cantidad para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
//     productoSeleccionado.umc
//   );

//   if (cantidad === null) break;
//   suma += cantidad;

//   console.log (`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);
//   alert(`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);

//   // Bucle para sumar más cantidades si el usuario lo desea
//   //! Falla: En esta parte del preoceso no me permite cancelar la compra cuando apreto cancelr. Lo estoy investigando
//   let deseaSumar;
//   do {
//     deseaSumar = prompt(
//       "¿Desea sumar otra cantidad de este producto? (si/no)"
//     )?.toLowerCase();

//     if (deseaSumar === null) {
//       cancelarOperacion();
//       break;
//     }

//     if (deseaSumar === "si") {
//       let cantidadAdicional = ingresarCantidad(
//         `Ingrese cantidad adicional para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
//         productoSeleccionado.umc
//       );
//       if (cantidadAdicional === null) {
//         cancelarOperacion();
//         break;
//       }
//       suma += cantidadAdicional;
//       console.log(
//           `Van sumados ${suma} en su pedido de ${productoSeleccionado.descripcion}`
//         );
//       alert(
//         `Van sumados ${suma} en su pedido de ${productoSeleccionado.descripcion}`
//       );
//     } else if (deseaSumar !== "no") {
//       alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//     }
//   } while (deseaSumar !== "no" && continuar);

//   if (!continuar) break;

//   // Agregar el pedido al resumen
//   resumenPedidos.push({
//     producto: productoSeleccionado.descripcion,
//     cantidad: suma,
//     umc: productoSeleccionado.umc,
//     totalPrecio:
//       (suma / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc,
//   });

//   // Preguntar si desea otro producto
//   //! Falla: En esta parte del preoceso no me permite cancelar la compra cuando apreto cancelr. Lo estoy investigando
//   let deseaOtroProducto;
//   do {
//     deseaOtroProducto = prompt("¿Desea seleccionar otro producto? (si/no)")
//       ?.toLowerCase();

//     if (deseaOtroProducto === null) {
//       cancelarOperacion();
//       break;
//     }

//     if (deseaOtroProducto !== "si" && deseaOtroProducto !== "no") {
//       alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//     }
//   } while (deseaOtroProducto !== "si" && deseaOtroProducto !== "no");

//   if (deseaOtroProducto === "no") {
//     continuar = false;
//   }
// }

// //   /* Mostrar el resumen de todos los productos seleccionados y sus cantidades usando forEach para recorrer y traer de vuelta toda la informacion recolectada en la  iteración que hubo con la variable remuenPedidos (todas las selecciones de productos y sus cantidades) y devolver el precio final del pedido. */

// let precioFinal = resumenPedidos.reduce(
//   (total, pedido) => total + pedido.totalPrecio,
//   0
// );


// if (resumenPedidos.length > 0) {
//   let mensajeFinal = "Resumen de su pedido:\n\n";
//   resumenPedidos.forEach((pedido, index) => {
//     mensajeFinal += `${index + 1}. ${pedido.producto}: ${pedido.cantidad} (${pedido.umc} por UMC) - Total: $${pedido.totalPrecio.toFixed(2)}\n`;
//   });
//   mensajeFinal += `\nPrecio final del pedido: $${precioFinal.toFixed(2)}`;

//   console.log (mensajeFinal);
//   alert(mensajeFinal);
// } else {
//   alert("No se realizó ningún pedido.");
// }

/*************************************************************************/

//ARRAY DE OBJETOS

// let nominaProductos = [
//   {
//     categoria: "Papeles Higienicos y Toallas",
//     codigo: "00001",
//     descripcion: "Papel Higienico",
//     presentacion: "Pack",
//     umc: 40,
//     precioPorUmc: 20000,
//     precioUnitario: 20000 / 40,
//   },
//   {
//     categoria: "Jabones Líquidos",
//     codigo: "00002",
//     descripcion: "Jabón líquido",
//     presentacion: "Bidón",
//     umc: 5,
//     precioPorUmc: 5000,
//     precioUnitario: 5000 / 5,
//   },
//   {
//     categoria: "Bolsas",
//     codigo: "00003",
//     descripcion: "Bolsa",
//     presentacion: "Pack",
//     umc: 250,
//     precioPorUmc: 12500,
//     precioUnitario: 12500 / 250,
//   },
//   {
//     categoria: "Trapos",
//     codigo: "00004",
//     descripcion: "Trapo de piso",
//     presentacion: "Unidad",
//     umc: 1,
//     precioPorUmc: 1000,
//     precioUnitario: 1000 / 1,
//   },
//   {
//     categoria: "Desodorantes / Desinfectantes líquidos",
//     codigo: "00005",
//     descripcion: "Desodorante Cherry",
//     presentacion: "Bidón",
//     umc: 5,
//     precioPorUmc: 6500,
//     precioUnitario: 6500 / 5,
//   },
//   {
//     categoria: "Ceras y lustradores",
//     codigo: "00006",
//     descripcion: "Blem pisos plastificados",
//     presentacion: "Bidón",
//     umc: 5,
//     precioPorUmc: 18000,
//     precioUnitario: 18000 / 5,
//   },
// ];

// // Función para cancelar la compra y reiniciar el proceso en caso de que el usuario presione cancelar en el prompt. 

// function cancelarOperacion() {
//   alert("Operación cancelada.");
//   resumenPedidos = []; // Reiniciar los pedidos al cancelar
//   continuar = false; // Detener el bucle principal
//   return null; // Retorna null para detener la ejecución en la función donde se llama
// }

// //   /* Función para mostrar productos y seleccionar uno. Invoca a variable mensajeProductos como una string usando  el recurso del caracter de escape \n para ajustar texto con saltos de líneas en prompt inicial (prompt y variable sleccionProducto ). También se creo una variable i que iteratúa, y suma en uno al recorrer con un ciclo for, hasta su limite maximo de contenido de objetos apelando al uso del metodo .lenght que retorna la cantidad de elementos que hay en el array de objetos devolviendo resultado visible en prompt como items enumerados, y trayecto como formato string tambien la descripcion del producto,codigo y precio. Tambien use template literals (plantillas literales) y backtips (que explico Carpi en clase DOM) en la construccion del mensaje (mensajeProductos) = a cada producto disponible*/
// function seleccionarProducto() {
//   let mensajeProductos = "Lista de productos disponibles:\n\n";
//   for (let i = 0; i < nominaProductos.length; i++) {
//     mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo}) $ ${nominaProductos[i].precioPorUmc}\n`;
//   }

//   let seleccionProducto;
//   let indiceSeleccionado;

//   // Bucle para repetir hasta que la selección sea válida
//   while (true) {
//     seleccionProducto = prompt(
//       `${mensajeProductos}\nSeleccione su producto escribiendo el número correspondiente:`
//     );

//     // Verificar si el usuario canceló la operación
//     if (seleccionProducto === null) return cancelarOperacion();

//     indiceSeleccionado = parseInt(seleccionProducto) - 1;

//     // Verificar si la selección es válida
//     if (
//       !isNaN(indiceSeleccionado) &&
//       indiceSeleccionado >= 0 &&
//       indiceSeleccionado < nominaProductos.length
//     ) {
//       let productoSeleccionado = nominaProductos[indiceSeleccionado];
//       console.log(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//       alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//       return productoSeleccionado;
//     } else {
//       alert("Selección no válida. Inténtelo de nuevo.");
//     }
//   }
// }

// // Función para verificar la validez de la cantidad
// function esValido(numero, umc) {
//   return !isNaN(numero) && numero % umc === 0;
// }

// // Función para ingresar una cantidad válida
// function ingresarCantidad(mensaje, umc) {
//   let cantidad;
//   do {
//     cantidad = prompt(mensaje);
//     // Verificar si el usuario canceló la operación
//     if (cantidad === null) return cancelarOperacion();
//     cantidad = parseInt(cantidad, 10);
//     if (!esValido(cantidad, umc)) {
//       console.log (`Cantidad incorrecta. La UMC es de ${umc}.`);
//       alert(`Cantidad incorrecta. La UMC es de ${umc}.`);
//     }
//   } while (!esValido(cantidad, umc));
//   return cantidad;
// }

// // Lista para almacenar los pedidos
// let resumenPedidos = [];

// // Iniciar el proceso de compra
// let continuar = true;
// while (continuar) {
//   // Selección del producto
//   let productoSeleccionado = seleccionarProducto();
//   if (!productoSeleccionado) break;

//   let suma = 0;
//   let cantidad = ingresarCantidad(
//     `Ingrese cantidad para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
//     productoSeleccionado.umc
//   );

//   if (cantidad === null) break;
//   suma += cantidad;

//   console.log (`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);
//   alert(`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);

//   // Bucle para sumar más cantidades si el usuario lo desea
//   //! Falla: En esta parte del preoceso no me permite cancelar la compra cuando apreto cancelr. Lo estoy investigando
//   let deseaSumar;
//   do {
//     deseaSumar = prompt(
//       "¿Desea sumar otra cantidad de este producto? (si/no)"
//     )?.toLowerCase();

//     if (deseaSumar === null) {
//       cancelarOperacion();
//       break;
//     }

//     if (deseaSumar === "si") {
//       let cantidadAdicional = ingresarCantidad(
//         `Ingrese cantidad adicional para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
//         productoSeleccionado.umc
//       );
//       if (cantidadAdicional === null) {
//         cancelarOperacion();
//         break;
//       }
//       suma += cantidadAdicional;
//       console.log(
//           `Van sumados ${suma} en su pedido de ${productoSeleccionado.descripcion}`
//         );
//       alert(
//         `Van sumados ${suma} en su pedido de ${productoSeleccionado.descripcion}`
//       );
//     } else if (deseaSumar !== "no") {
//       alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//     }
//   } while (deseaSumar !== "no" && continuar);

//   if (!continuar) break;

//   // Agregar el pedido al resumen
//   resumenPedidos.push({
//     producto: productoSeleccionado.descripcion,
//     cantidad: suma,
//     umc: productoSeleccionado.umc,
//     totalPrecio:
//       (suma / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc,
//   });

//   // Preguntar si desea otro producto
//   //! Falla: En esta parte del preoceso no me permite cancelar la compra cuando apreto cancelr. Lo estoy investigando
//   let deseaOtroProducto;
//   do {
//     deseaOtroProducto = prompt("¿Desea seleccionar otro producto? (si/no)")
//       ?.toLowerCase();

//     if (deseaOtroProducto === null) {
//       cancelarOperacion();
//       break;
//     }

//     if (deseaOtroProducto !== "si" && deseaOtroProducto !== "no") {
//       alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//     }
//   } while (deseaOtroProducto !== "si" && deseaOtroProducto !== "no");

//   if (deseaOtroProducto === "no") {
//     continuar = false;
//   }
// }

// //   /* Mostrar el resumen de todos los productos seleccionados y sus cantidades usando forEach para recorrer y traer de vuelta toda la informacion recolectada en la  iteración que hubo con la variable remuenPedidos (todas las selecciones de productos y sus cantidades) y devolver el precio final del pedido. */

// let precioFinal = resumenPedidos.reduce(
//   (total, pedido) => total + pedido.totalPrecio,
//   0
// );


// if (resumenPedidos.length > 0) {
//   let mensajeFinal = "Resumen de su pedido:\n\n";
//   resumenPedidos.forEach((pedido, index) => {
//     mensajeFinal += `${index + 1}. ${pedido.producto}: ${pedido.cantidad} (${pedido.umc} por UMC) - Total: $${pedido.totalPrecio.toFixed(2)}\n`;
//   });
//   mensajeFinal += `\nPrecio final del pedido: $${precioFinal.toFixed(2)}`;

//   console.log (mensajeFinal);
//   alert(mensajeFinal);
// } else {
//   alert("No se realizó ningún pedido.");
// }

//ARRAY DE OBJETOS

// let nominaProductos = [
//   {
//     categoria: "Papeles Higienicos y Toallas",
//     codigo: "00001",
//     descripcion: "Papel Higienico",
//     presentacion: "Pack",
//     umc: 40,
//     precioPorUmc: 20000,
//     precioUnitario: 20000 / 40,
//   },
//   {
//     categoria: "Jabones Líquidos",
//     codigo: "00002",
//     descripcion: "Jabón líquido",
//     presentacion: "Bidón",
//     umc: 5,
//     precioPorUmc: 5000,
//     precioUnitario: 5000 / 5,
//   },
//   {
//     categoria: "Bolsas",
//     codigo: "00003",
//     descripcion: "Bolsa",
//     presentacion: "Pack",
//     umc: 250,
//     precioPorUmc: 12500,
//     precioUnitario: 12500 / 250,
//   },
//   {
//     categoria: "Trapos",
//     codigo: "00004",
//     descripcion: "Trapo de piso",
//     presentacion: "Unidad",
//     umc: 1,
//     precioPorUmc: 1000,
//     precioUnitario: 1000 / 1,
//   },
//   {
//     categoria: "Desodorantes / Desinfectantes líquidos",
//     codigo: "00005",
//     descripcion: "Desodorante Cherry",
//     presentacion: "Bidón",
//     umc: 5,
//     precioPorUmc: 6500,
//     precioUnitario: 6500 / 5,
//   },
//   {
//     categoria: "Ceras y lustradores",
//     codigo: "00006",
//     descripcion: "Blem pisos plastificados",
//     presentacion: "Bidón",
//     umc: 5,
//     precioPorUmc: 18000,
//     precioUnitario: 18000 / 5,
//   },
// ];

// // Función para cancelar la compra y reiniciar el proceso en caso de que el usuario presione cancelar en el prompt. 

// function cancelarOperacion() {
//   alert("Operación cancelada.");
//   resumenPedidos = []; // Reiniciar los pedidos al cancelar
//   continuar = false; // Detener el bucle principal
//   return null; // Retorna null para detener la ejecución en la función donde se llama
// }

// //   /* Función para mostrar productos y seleccionar uno. Invoca a variable mensajeProductos como una string usando  el recurso del caracter de escape \n para ajustar texto con saltos de líneas en prompt inicial (prompt y variable sleccionProducto ). También se creo una variable i que iteratúa, y suma en uno al recorrer con un ciclo for, hasta su limite maximo de contenido de objetos apelando al uso del metodo .lenght que retorna la cantidad de elementos que hay en el array de objetos devolviendo resultado visible en prompt como items enumerados, y trayecto como formato string tambien la descripcion del producto,codigo y precio. Tambien use template literals (plantillas literales) y backtips (que explico Carpi en clase DOM) en la construccion del mensaje (mensajeProductos) = a cada producto disponible*/
// function seleccionarProducto() {
//   let mensajeProductos = "Lista de productos disponibles:\n\n";
//   for (let i = 0; i < nominaProductos.length; i++) {
//     mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo}) $ ${nominaProductos[i].precioPorUmc}\n`;
//   }

//   let seleccionProducto;
//   let indiceSeleccionado;

//   // Bucle para repetir hasta que la selección sea válida
//   while (true) {
//     seleccionProducto = prompt(
//       `${mensajeProductos}\nSeleccione su producto escribiendo el número correspondiente:`
//     );

//     // Verificar si el usuario canceló la operación
//     if (seleccionProducto === null) return cancelarOperacion();

//     indiceSeleccionado = parseInt(seleccionProducto) - 1;

//     // Verificar si la selección es válida
//     if (
//       !isNaN(indiceSeleccionado) &&
//       indiceSeleccionado >= 0 &&
//       indiceSeleccionado < nominaProductos.length
//     ) {
//       let productoSeleccionado = nominaProductos[indiceSeleccionado];
//       console.log(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//       alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
//       return productoSeleccionado;
//     } else {
//       alert("Selección no válida. Inténtelo de nuevo.");
//     }
//   }
// }

// // Función para verificar la validez de la cantidad
// function esValido(numero, umc) {
//   return !isNaN(numero) && numero % umc === 0;
// }

// // Función para ingresar una cantidad válida
// function ingresarCantidad(mensaje, umc) {
//   let cantidad;
//   do {
//     cantidad = prompt(mensaje);
//     // Verificar si el usuario canceló la operación
//     if (cantidad === null) return cancelarOperacion();
//     cantidad = parseInt(cantidad, 10);
//     if (!esValido(cantidad, umc)) {
//       console.log (`Cantidad incorrecta. La UMC es de ${umc}.`);
//       alert(`Cantidad incorrecta. La UMC es de ${umc}.`);
//     }
//   } while (!esValido(cantidad, umc));
//   return cantidad;
// }

// // Lista para almacenar los pedidos
// let resumenPedidos = [];

// // Iniciar el proceso de compra
// let continuar = true;
// while (continuar) {
//   // Selección del producto
//   let productoSeleccionado = seleccionarProducto();
//   if (!productoSeleccionado) break;

//   let suma = 0;
//   let cantidad = ingresarCantidad(
//     `Ingrese cantidad para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
//     productoSeleccionado.umc
//   );

//   if (cantidad === null) break;
//   suma += cantidad;

//   console.log (`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);
//   alert(`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);

//   // Bucle para sumar más cantidades si el usuario lo desea
//   //! Falla: En esta parte del preoceso no me permite cancelar la compra cuando apreto cancelr. Lo estoy investigando
//   let deseaSumar;
//   do {
//     deseaSumar = prompt(
//       "¿Desea sumar otra cantidad de este producto? (si/no)"
//     )?.toLowerCase();

//     if (deseaSumar === null) {
//       cancelarOperacion();
//       break;
//     }

//     if (deseaSumar === "si") {
//       let cantidadAdicional = ingresarCantidad(
//         `Ingrese cantidad adicional para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
//         productoSeleccionado.umc
//       );
//       if (cantidadAdicional === null) {
//         cancelarOperacion();
//         break;
//       }
//       suma += cantidadAdicional;
//       console.log(
//           `Van sumados ${suma} en su pedido de ${productoSeleccionado.descripcion}`
//         );
//       alert(
//         `Van sumados ${suma} en su pedido de ${productoSeleccionado.descripcion}`
//       );
//     } else if (deseaSumar !== "no") {
//       alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//     }
//   } while (deseaSumar !== "no" && continuar);

//   if (!continuar) break;

//   // Agregar el pedido al resumen
//   resumenPedidos.push({
//     producto: productoSeleccionado.descripcion,
//     cantidad: suma,
//     umc: productoSeleccionado.umc,
//     totalPrecio:
//       (suma / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc,
//   });

//   // Preguntar si desea otro producto
//   //! Falla: En esta parte del preoceso no me permite cancelar la compra cuando apreto cancelr. Lo estoy investigando
//   let deseaOtroProducto;
//   do {
//     deseaOtroProducto = prompt("¿Desea seleccionar otro producto? (si/no)")
//       ?.toLowerCase();

//     if (deseaOtroProducto === null) {
//       cancelarOperacion();
//       break;
//     }

//     if (deseaOtroProducto !== "si" && deseaOtroProducto !== "no") {
//       alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
//     }
//   } while (deseaOtroProducto !== "si" && deseaOtroProducto !== "no");

//   if (deseaOtroProducto === "no") {
//     continuar = false;
//   }
// }

// //   /* Mostrar el resumen de todos los productos seleccionados y sus cantidades usando forEach para recorrer y traer de vuelta toda la informacion recolectada en la  iteración que hubo con la variable remuenPedidos (todas las selecciones de productos y sus cantidades) y devolver el precio final del pedido. */

// let precioFinal = resumenPedidos.reduce(
//   (total, pedido) => total + pedido.totalPrecio,
//   0
// );


// if (resumenPedidos.length > 0) {
//   let mensajeFinal = "Resumen de su pedido:\n\n";
//   resumenPedidos.forEach((pedido, index) => {
//     mensajeFinal += `${index + 1}. ${pedido.producto}: ${pedido.cantidad} (${pedido.umc} por UMC) - Total: $${pedido.totalPrecio.toFixed(2)}\n`;
//   });
//   mensajeFinal += `\nPrecio final del pedido: $${precioFinal.toFixed(2)}`;

//   console.log (mensajeFinal);
//   alert(mensajeFinal);
// } else {
//   alert("No se realizó ningún pedido.");
// }

// // Función para mostrar los productos en el elemento con id 'nominadeproductos'
// function mostrarProductos() {
//   // Seleccionamos el elemento HTML donde mostraremos los productos
//   const contenedor = document.getElementById('nominadeproductos');
  
//   // Limpiar cualquier contenido previo
//   contenedor.innerHTML = '';

//   // Crear un elemento de lista
//   const lista = document.createElement('ul');

//   // Recorrer el array de productos
//   nominaProductos.forEach(producto => {
//       // Crear un elemento de lista para cada producto
//       const item = document.createElement('li');
//       // Crear el contenido del elemento
//       item.textContent = `Descripción: ${producto.descripcion}, Presentación: ${producto.presentacion}, UMC: ${producto.umc}, Precio: $${producto.precioPorUmc.toFixed(2)}`;
//       // Agregar el elemento a la lista
//       lista.appendChild(item);
//   });

//   // Agregar la lista al contenedor
//   contenedor.appendChild(lista);
// }

// // Llamar a la función para mostrar los productos al cargar el script
// mostrarProductos();
/******************************************************************* */
/******************************************************************* */

// ARRAY DE OBJETOS
let nominaProductos = [
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
];

// Lista para almacenar los pedidos
let resumenPedidos = [];

// Mostrar categorías en el select
function mostrarCategorias() {
  const selectCategoria = document.getElementById('categoriaSelect');
  const categorias = [...new Set(nominaProductos.map(producto => producto.categoria))];

  const optionTodos = document.createElement('option');
  optionTodos.value = '';
  optionTodos.textContent = 'Todas las categorías';
  selectCategoria.append(optionTodos);

  categorias.forEach(categoria => {
    const option = document.createElement('option');
    option.value = categoria;
    option.textContent = categoria;
    selectCategoria.append(option);
  });

  selectCategoria.onchange = mostrarProductosFiltrados;
}

function mostrarProductosFiltrados() {
  const categoriaSeleccionada = document.getElementById('categoriaSelect').value;
  const productosFiltrados = categoriaSeleccionada
    ? nominaProductos.filter(producto => producto.categoria === categoriaSeleccionada)
    : nominaProductos;
  mostrarProductos(productosFiltrados);
}

function mostrarProductos(productos) {
  const contenedor = document.getElementById('nominadeproductos');
  contenedor.innerHTML = ''; // Eliminamos cualquier contenido anterior
  const lista = document.createElement('ul'); // Creamos la lista

  productos.forEach(producto => {
    const item = document.createElement('li');
    const contenido = ` ${producto.codigo} ${producto.descripcion} ${producto.presentacion} de ${producto.umc} Precio: $${producto.precioPorUmc.toFixed(2)}`;
    item.textContent = contenido;
    
    const contenedorBotones = document.createElement('div');
    contenedorBotones.classList.add('botonera');

    const btnAgregar = document.createElement('button');
    btnAgregar.textContent = 'Agregar';
    btnAgregar.classList.add('agregar');
    btnAgregar.onclick = () => modificarProducto(producto, producto.umc);

    const btnQuitar = document.createElement('button');
    btnQuitar.textContent = 'Quitar';
    btnQuitar.classList.add('quitar');
    btnQuitar.onclick = () => modificarProducto(producto, -producto.umc);

    contenedorBotones.append(btnAgregar);
    contenedorBotones.append(btnQuitar);

    item.append(contenedorBotones);

    lista.append(item);
  });

  contenedor.append(lista); // Añadimos la lista al contenedor
}

function modificarProducto(productoSeleccionado, cantidad) {
  const pedidoExistente = resumenPedidos.find(pedido => pedido.producto === productoSeleccionado.descripcion);

  if (pedidoExistente) {
    pedidoExistente.cantidad += cantidad;
    if (pedidoExistente.cantidad <= 0) {
      resumenPedidos = resumenPedidos.filter(pedido => pedido.producto !== productoSeleccionado.descripcion);
      localStorage.removeItem(`carrito-${productoSeleccionado.codigo}`);
    } else {
      pedidoExistente.totalPrecio = (pedidoExistente.cantidad / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc;
      localStorage.setItem(`carrito-${productoSeleccionado.codigo}`, JSON.stringify(pedidoExistente));
    }
  } else if (cantidad > 0) {
    const nuevoPedido = {
      producto: productoSeleccionado.descripcion,
      cantidad: cantidad,
      umc: productoSeleccionado.umc,
      totalPrecio: (cantidad / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc,
    };
    resumenPedidos.push(nuevoPedido);
    localStorage.setItem(`carrito-${productoSeleccionado.codigo}`, JSON.stringify(nuevoPedido));
  }

  mostrarResumenPedidos();
}

function cargarCarrito() {
  resumenPedidos = [];
  const keys = Object.keys(localStorage).filter(key => key.startsWith('carrito-'));

  keys.forEach(key => {
    const pedido = JSON.parse(localStorage.getItem(key));
    resumenPedidos.push(pedido);
  });

  mostrarResumenPedidos();
}

function mostrarResumenPedidos() {
  const resumenContenedor = document.getElementById('resumenPedidos');
  resumenContenedor.innerHTML = '';

  let precioFinal = 0;
  resumenPedidos.forEach((pedido, index) => {
    const pedidoElem = document.createElement('p');
    pedidoElem.textContent = `${index + 1}. ${pedido.producto}: ${pedido.cantidad} (${pedido.umc} por UMC) - Total: $${pedido.totalPrecio.toFixed(2)}`;
    resumenContenedor.append(pedidoElem);
    precioFinal += pedido.totalPrecio;
  });

  const precioFinalElem = document.createElement('p');
  precioFinalElem.textContent = `Va sumado en su pedido: $${precioFinal.toFixed(2)}`;
  resumenContenedor.append(precioFinalElem);
}

function vaciarCarrito() {
  resumenPedidos = [];
  const keys = Object.keys(localStorage).filter(key => key.startsWith('carrito-'));

  keys.forEach(key => {
    localStorage.removeItem(key);
  });

  mostrarResumenPedidos();
}

mostrarCategorias();
mostrarProductos(nominaProductos);
cargarCarrito();

document.getElementById('vaciarCarrito').onclick = vaciarCarrito;









