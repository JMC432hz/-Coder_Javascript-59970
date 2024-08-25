let suma = 0;

// Función para verificar la validez del número
function esValido(numero) {
    return !isNaN(numero) && numero % 5 === 0;
}

// Función para ingresar una cantidad válida
function ingresarCantidad(mensaje) {
    let cantidad;
    do {
        cantidad = parseInt(prompt(mensaje), 10);
        if (!esValido(cantidad)) {
            console.log("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
            alert ("Cantidad ingresada incorrecta. La UMC (Unidad de medida comercial) es de 5 lts.");
        }
    } while (!esValido(cantidad));
    return cantidad;
}

// Ingreso inicial
let numero = ingresarCantidad("Ingrese cantidad (en litros):");
suma += numero;
console.log("La cantidad inicial es de " + suma + " lts.");

// Bucle para sumar más cantidades si el usuario lo desea
let deseaSumar;
do {
    deseaSumar = prompt("Desea sumar otra cantidad? (si/no)").toLowerCase();
    if (deseaSumar === "si") {
        let cantidadAdicional = ingresarCantidad("Ingrese cantidad adicional (en litros):");
        suma += cantidadAdicional;
        console.log("La cantidad total es de " + suma + " lts.");
        alert ("Van sumados " + suma + " lts. en su pedido");
    } else if (deseaSumar !== "no") {
        console.log("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
        alert ("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
    }
} while (deseaSumar !== "no");

// Mostrar el total final
console.log("La cantidad final es de " + suma + " lts.");
alert ("La cantidad final es de " + suma + " lts.")
