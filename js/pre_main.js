fetch("../data.json")
    .then((resp) => resp.json())
    .then((data) =>  {
        nominaProductos = data;
        mostrarCategorias();
        mostrarProductos(nominaProductos);
    })
    .catch((error) => console.error('Error al cargar los productos:', error));

let nominaProductos = [];
let resumenPedidos = [];

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
    contenedor.innerHTML = '';
    const lista = document.createElement('ul');

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

    contenedor.append(lista);
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

    localStorage.setItem('carrito', JSON.stringify(resumenPedidos));
    mostrarResumenPedidos();
}

function cargarCarrito() {
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

// Confirmar pedido
document.getElementById('confirmarPedido').addEventListener('click', () => {
    if (resumenPedidos.length === 0) {
        Swal.fire({
            title: "No hay productos seleccionados",
            text: "Agregue productos al carrito antes de confirmar el pedido.",
            icon: "warning",
            confirmButtonText: "OK",
        });
    } else {
        Swal.fire({
            title: "¿Confirmar compra?",
            icon: "warning",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "¡Pedido confirmado!",
                    text: "Redirigiendo al resumen de la compra...",
                    icon: "success",
                    timer: 5000, // Temporizador de 4 segundos
                    showConfirmButton: false
                });

                setTimeout(() => {
                    const dt = luxon.DateTime.now();
                    const nuevaPagina = window.open();
                    nuevaPagina.document.write('<h1>Resumen de Pedido</h1>');
                    nuevaPagina.document.write(`<p>Fecha y hora: ${dt.toLocaleString(luxon.DateTime.DATETIME_SHORT)} hs.</p>`);
                    let precioFinal = 0;
                    resumenPedidos.forEach((pedido, index) => {
                        nuevaPagina.document.write(`<p>${index + 1}. ${pedido.producto}: ${pedido.cantidad} - Total: $${pedido.totalPrecio.toFixed(2)}</p>`);
                        precioFinal += pedido.totalPrecio;
                    });
                    nuevaPagina.document.write(`<p>Total Final: $${precioFinal.toFixed(2)}</p>`);
                    nuevaPagina.document.close();

                    // Vaciar el carrito después de la compra
                    resumenPedidos = [];
                    localStorage.removeItem('carrito');
                    mostrarResumenPedidos();

                }, 4000); // Espera 4 segundos antes de abrir la nueva página
            }
        });
    }
});

// Vaciar carrito
document.getElementById('vaciarCarrito').addEventListener('click', () => {
    if (resumenPedidos.length === 0) {
        Swal.fire({
            title: "No hay productos en el carrito",
            icon: "warning",
            confirmButtonText: "OK",
        });
    } else {
        Swal.fire({
            title: "¿Vaciar carrito?",
            icon: "warning",
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
