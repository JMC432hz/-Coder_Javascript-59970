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
      localStorage.removeItem(`carrito${productoSeleccionado.codigo}`);
    } else {
      pedidoExistente.totalPrecio = (pedidoExistente.cantidad / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc;
      localStorage.setItem(`carrito${productoSeleccionado.codigo}`, JSON.stringify(pedidoExistente));
    }
  } else if (cantidad > 0) {
    const nuevoPedido = {
      producto: productoSeleccionado.descripcion,
      cantidad: cantidad,
      umc: productoSeleccionado.umc,
      totalPrecio: (cantidad / productoSeleccionado.umc) * productoSeleccionado.precioPorUmc,
    };
    resumenPedidos.push(nuevoPedido);
    localStorage.setItem(`carrito${productoSeleccionado.codigo}`, JSON.stringify(nuevoPedido));
  }

  mostrarResumenPedidos();
}

function cargarCarrito() {
  resumenPedidos = [];
  const keys = Object.keys(localStorage).filter(key => key.startsWith('carrito'));

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
  const keys = Object.keys(localStorage).filter(key => key.startsWith('carrito'));

  keys.forEach(key => {
    localStorage.removeItem(key);
  });

  mostrarResumenPedidos();
}

mostrarCategorias();
mostrarProductos(nominaProductos);
cargarCarrito();

document.getElementById('vaciarCarrito').addEventListener('click',vaciarCarrito)