//ARRAY DE OBJETOS

let nominaProductos = [
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
  
  // Función para cancelar la compra y reiniciar el proceso en caso de que el usuario presione cancelar en el prompt. 

  function cancelarOperacion() {
    alert("Operación cancelada.");
    resumenPedidos = []; // Reiniciar los pedidos al cancelar
    continuar = false; // Detener el bucle principal
    return null; // Retorna null para detener la ejecución en la función donde se llama
  }
  
  //   /* Función para mostrar productos y seleccionar uno. Invoca a variable mensajeProductos como una string usando  el recurso del caracter de escape \n para ajustar texto con saltos de líneas en prompt inicial (prompt y variable sleccionProducto ). También se creo una variable i que iteratúa, y suma en uno al recorrer con un ciclo for, hasta su limite maximo de contenido de objetos apelando al uso del metodo .lenght que retorna la cantidad de elementos que hay en el array de objetos devolviendo resultado visible en prompt como items enumerados, y trayecto como formato string tambien la descripcion del producto,codigo y precio. Tambien use template literals (plantillas literales) y backtips (que explico Carpi en clase DOM) en la construccion del mensaje (mensajeProductos) = a cada producto disponible*/
  function seleccionarProducto() {
    let mensajeProductos = "Lista de productos disponibles:\n\n";
    for (let i = 0; i < nominaProductos.length; i++) {
      mensajeProductos += `${i + 1}. ${nominaProductos[i].descripcion} (Código: ${nominaProductos[i].codigo}) $ ${nominaProductos[i].precioPorUmc}\n`;
    }
  
    let seleccionProducto;
    let indiceSeleccionado;
  
    // Bucle para repetir hasta que la selección sea válida
    while (true) {
      seleccionProducto = prompt(
        `${mensajeProductos}\nSeleccione su producto escribiendo el número correspondiente:`
      );
  
      // Verificar si el usuario canceló la operación
      if (seleccionProducto === null) return cancelarOperacion();
  
      indiceSeleccionado = parseInt(seleccionProducto) - 1;
  
      // Verificar si la selección es válida
      if (
        !isNaN(indiceSeleccionado) &&
        indiceSeleccionado >= 0 &&
        indiceSeleccionado < nominaProductos.length
      ) {
        let productoSeleccionado = nominaProductos[indiceSeleccionado];
        console.log(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
        alert(`Ha seleccionado: ${productoSeleccionado.descripcion}`);
        return productoSeleccionado;
      } else {
        alert("Selección no válida. Inténtelo de nuevo.");
      }
    }
  }
  
  // Función para verificar la validez de la cantidad
  function esValido(numero, umc) {
    return !isNaN(numero) && numero % umc === 0;
  }
  
  // Función para ingresar una cantidad válida
  function ingresarCantidad(mensaje, umc) {
    let cantidad;
    do {
      cantidad = prompt(mensaje);
      // Verificar si el usuario canceló la operación
      if (cantidad === null) return cancelarOperacion();
      cantidad = parseInt(cantidad, 10);
      if (!esValido(cantidad, umc)) {
        console.log (`Cantidad incorrecta. La UMC es de ${umc}.`);
        alert(`Cantidad incorrecta. La UMC es de ${umc}.`);
      }
    } while (!esValido(cantidad, umc));
    return cantidad;
  }
  
  // Lista para almacenar los pedidos
  let resumenPedidos = [];
  
  // Iniciar el proceso de compra
  let continuar = true;
  while (continuar) {
    // Selección del producto
    let productoSeleccionado = seleccionarProducto();
    if (!productoSeleccionado) break;
  
    let suma = 0;
    let cantidad = ingresarCantidad(
      `Ingrese cantidad para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
      productoSeleccionado.umc
    );
  
    if (cantidad === null) break;
    suma += cantidad;
  
    console.log (`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);
    alert(`La cantidad inicial de ${productoSeleccionado.descripcion} es de ${suma}.`);
  
    // Bucle para sumar más cantidades si el usuario lo desea
    //! Falla: En esta parte del preoceso no me permite cancelar la compra cuando apreto cancelr. Lo estoy investigando
    let deseaSumar;
    do {
      deseaSumar = prompt(
        "¿Desea sumar otra cantidad de este producto? (si/no)"
      )?.toLowerCase();
  
      if (deseaSumar === null) {
        cancelarOperacion();
        break;
      }
  
      if (deseaSumar === "si") {
        let cantidadAdicional = ingresarCantidad(
          `Ingrese cantidad adicional para ${productoSeleccionado.descripcion} (en ${productoSeleccionado.presentacion} de ${productoSeleccionado.umc} unidades):`,
          productoSeleccionado.umc
        );
        if (cantidadAdicional === null) {
          cancelarOperacion();
          break;
        }
        suma += cantidadAdicional;
        console.log(
            `Van sumados ${suma} en su pedido de ${productoSeleccionado.descripcion}`
          );
        alert(
          `Van sumados ${suma} en su pedido de ${productoSeleccionado.descripcion}`
        );
      } else if (deseaSumar !== "no") {
        alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
      }
    } while (deseaSumar !== "no" && continuar);
  
    if (!continuar) break;
  
    // Agregar el pedido al resumen
    resumenPedidos.push({
      producto: productoSeleccionado.descripcion,
      cantidad: suma,
      umc: productoSeleccionado.umc,
      totalPrecio:
        (suma / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc,
    });
  
    // Preguntar si desea otro producto
    //! Falla: En esta parte del preoceso no me permite cancelar la compra cuando apreto cancelr. Lo estoy investigando
    let deseaOtroProducto;
    do {
      deseaOtroProducto = prompt("¿Desea seleccionar otro producto? (si/no)")
        ?.toLowerCase();
  
      if (deseaOtroProducto === null) {
        cancelarOperacion();
        break;
      }
  
      if (deseaOtroProducto !== "si" && deseaOtroProducto !== "no") {
        alert("Respuesta no reconocida. Por favor, ingrese 'si' o 'no'.");
      }
    } while (deseaOtroProducto !== "si" && deseaOtroProducto !== "no");
  
    if (deseaOtroProducto === "no") {
      continuar = false;
    }
  }
  
  //   /* Mostrar el resumen de todos los productos seleccionados y sus cantidades usando forEach para recorrer y traer de vuelta toda la informacion recolectada en la  iteración que hubo con la variable remuenPedidos (todas las selecciones de productos y sus cantidades) y devolver el precio final del pedido. */

  let precioFinal = resumenPedidos.reduce(
    (total, pedido) => total + pedido.totalPrecio,
    0
  );
  
  
  if (resumenPedidos.length > 0) {
    let mensajeFinal = "Resumen de su pedido:\n\n";
    resumenPedidos.forEach((pedido, index) => {
      mensajeFinal += `${index + 1}. ${pedido.producto}: ${pedido.cantidad} (${pedido.umc} por UMC) - Total: $${pedido.totalPrecio.toFixed(2)}\n`;
    });
    mensajeFinal += `\nPrecio final del pedido: $${precioFinal.toFixed(2)}`;
  
    console.log (mensajeFinal);
    alert(mensajeFinal);
  } else {
    alert("No se realizó ningún pedido.");
  }
  