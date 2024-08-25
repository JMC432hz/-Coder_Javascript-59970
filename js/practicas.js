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