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


let numero = parseInt(prompt("Ingrese cantidad (en litros):"), 10);
let suma = 0;


if (isNaN(numero) || numero % 5 !== 0) {
    console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
} else {
    suma = numero;
    console.log("La cantidad ingresada es de " + suma + " lts.");
}

// Bucle para sumar más cantidades si el usuario lo desea
let deseaSumar = prompt("Desea sumar otra cantidad? (si/no)");

while (deseaSumar.toLowerCase() === "si") {
    let cantidadAdicional = parseInt(prompt("Ingrese cantidad adicional (en litros):"), 10);

    if (isNaN(cantidadAdicional) || cantidadAdicional % 5 !== 0) {
        console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
    } else {
        suma += cantidadAdicional;
        console.log("La cantidad total es de " + suma + " lts.");
    }

    deseaSumar = prompt("Desea sumar otra cantidad? (si/no)");
}

// Mostrar el total final
console.log("La cantidad final es de " + suma + " lts.");
