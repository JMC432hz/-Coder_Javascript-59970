let DateTime = luxon.DateTime;

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

  selectCategoria.addEventListener('change', mostrarProductosFiltrados);
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
  contenedor.innerHTML = ''; // Limpiamos el contenido anterior
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
    btnAgregar.addEventListener('click', () => modificarProducto(producto, producto.umc));

    const btnQuitar = document.createElement('button');
    btnQuitar.textContent = 'Quitar';
    btnQuitar.classList.add('quitar');
    btnQuitar.addEventListener('click', () => modificarProducto(producto, -producto.umc));

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
    } else {
      pedidoExistente.totalPrecio = (pedidoExistente.cantidad / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc;
    }
  } else if (cantidad > 0) {
    const nuevoPedido = {
      producto: productoSeleccionado.descripcion,
      cantidad: cantidad,
      umc: productoSeleccionado.umc,
      totalPrecio: (cantidad / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc,
    };
    resumenPedidos.push(nuevoPedido);
  }

  // Guardar en localStorage bajo la clave "carrito"
  localStorage.setItem('carrito', JSON.stringify(resumenPedidos));
  mostrarResumenPedidos();
}

function cargarCarrito() {
  // Recuperar el carrito desde localStorage
  const carritoGuardado = localStorage.getItem('carrito');
  resumenPedidos = carritoGuardado ? JSON.parse(carritoGuardado) : [];
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
  precioFinalElem.textContent = `Total en su pedido: $${precioFinal.toFixed(2)}`;
  resumenContenedor.append(precioFinalElem);
}

let sweetAlertButtonCompra = document.querySelector('#confirmarPedido');
sweetAlertButtonCompra.addEventListener('click', () => {
  if (resumenPedidos.length === 0) {
    // Mostrar alerta si no hay productos seleccionados
    Swal.fire({
      title: "No hay productos seleccionados",
      text: "Por favor, agregue productos al carrito antes de confirmar el pedido.",
      icon: "warning",
      confirmButtonText: "OK",
    });
  } else {
    Swal.fire({
      title: "¿Desea confirmar su compra?",
      icon: "warning",
      iconColor: "red",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const dt = DateTime.now();
        const nuevaPagina = window.open();
        nuevaPagina.document.write('<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Confirmación de Pedido</title></head><body>');
        nuevaPagina.document.write('<h1>Resumen de Pedido</h1>');
        nuevaPagina.document.write(`<p>Fecha y hora: ${dt.toLocaleString(DateTime.DATETIME_SHORT)} hs.</p>`);
        nuevaPagina.document.write('<ul>');

        let precioFinal = 0;
        resumenPedidos.forEach((pedido, index) => {
          nuevaPagina.document.write(`<li>${index + 1}. ${pedido.producto}: ${pedido.cantidad} (${pedido.umc} por UMC) - Total: $${pedido.totalPrecio.toFixed(2)}</li>`);
          precioFinal += pedido.totalPrecio;
        });

        nuevaPagina.document.write(`</ul><p>Total Final: $${precioFinal.toFixed(2)}</p>`);
        nuevaPagina.document.write('</body></html>');
        nuevaPagina.document.close();
      }
    });
  }
});

let sweetAlertButtonVaciar = document.querySelector('#vaciarCarrito');
sweetAlertButtonVaciar.addEventListener('click', () => {
  if (resumenPedidos.length === 0) {
    Swal.fire({
      title: "No hay productos seleccionados",
      text: "Para vaciar el carrito deben haber productos seleccionados.",
      icon: "warning",
      confirmButtonText: "OK",
    });
  } else {
    Swal.fire({
      title: "¿Desea vaciar el carrito?",
      icon: "warning",
      iconColor: "red",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        resumenPedidos = [];
        localStorage.removeItem('carrito');
        mostrarResumenPedidos();
      }
    });
  }
});

cargarCarrito();
mostrarCategorias();
mostrarProductos(nominaProductos);
