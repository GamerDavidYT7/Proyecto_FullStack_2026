const URL_BASE = "http://localhost:3000";

const formProducto = document.getElementById("formProducto");
const tablaProductos = document.querySelector("#tablaProductos tbody");
const botonGuardar = formProducto.querySelector("button[type='submit']");

let idProductoEditando = null;

const mensaje = document.createElement("div");
mensaje.id = "mensajeProductos";
mensaje.className = "alert d-none mt-3";
formProducto.after(mensaje);

function mostrarMensaje(texto, tipo) {
    console.log(texto);
    mensaje.textContent = texto;
    mensaje.className = `alert alert-${tipo} mt-3`;
}

function obtenerDatosFormulario() {
    return {
        nombre: document.getElementById("nombre").value.trim(),
        descripcion: document.getElementById("descripcion").value.trim(),
        precio: document.getElementById("precio").value.trim(),
        categoria: document.getElementById("categoria").value.trim(),
        stock: document.getElementById("stock").value.trim(),
        imagen: document.getElementById("imagen").value.trim()
    };
}

function limpiarFormulario() {
    formProducto.reset();
    idProductoEditando = null;
    botonGuardar.textContent = "Guardar producto";
}

function crearCelda(texto) {
    const celda = document.createElement("td");
    celda.textContent = texto;
    return celda;
}

function mostrarProductos(productos) {
    tablaProductos.innerHTML = "";

    if (productos.length === 0) {
        const fila = document.createElement("tr");
        const celda = document.createElement("td");

        celda.colSpan = 7;
        celda.textContent = "No hay productos registrados.";
        celda.className = "text-center";

        fila.appendChild(celda);
        tablaProductos.appendChild(fila);
        return;
    }

    productos.forEach((producto) => {
        const fila = document.createElement("tr");

        fila.appendChild(crearCelda(producto.nombre));
        fila.appendChild(crearCelda(producto.descripcion));
        fila.appendChild(crearCelda(`$${producto.precio}`));
        fila.appendChild(crearCelda(producto.categoria));
        fila.appendChild(crearCelda(producto.stock));
        fila.appendChild(crearCelda(producto.imagen));

        const celdaAcciones = document.createElement("td");

        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.textContent = "Editar";
        botonEditar.className = "btn btn-warning btn-sm me-2";
        botonEditar.addEventListener("click", () => prepararEdicion(producto));

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "btn btn-danger btn-sm";
        botonEliminar.addEventListener("click", () => eliminarProducto(producto.id));

        celdaAcciones.appendChild(botonEditar);
        celdaAcciones.appendChild(botonEliminar);
        fila.appendChild(celdaAcciones);

        tablaProductos.appendChild(fila);
    });
}

async function listarProductos() {
    try {
        const respuesta = await fetch(`${URL_BASE}/productos`);
        const productos = await respuesta.json();

        mostrarProductos(productos);
        mostrarMensaje("Productos cargados correctamente.", "success");
    } catch (error) {
        console.error("Error al listar productos:", error);
        mostrarMensaje("No se pudieron cargar los productos.", "danger");
    }
}

async function guardarProducto(producto) {
    const respuesta = await fetch(`${URL_BASE}/productos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    if (!respuesta.ok) {
        throw new Error("Error al guardar el producto");
    }
}

async function actualizarProducto(id, producto) {
    const respuesta = await fetch(`${URL_BASE}/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    if (!respuesta.ok) {
        throw new Error("Error al actualizar el producto");
    }
}

function prepararEdicion(producto) {
    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("stock").value = producto.stock;
    document.getElementById("imagen").value = producto.imagen;

    idProductoEditando = producto.id;
    botonGuardar.textContent = "Actualizar producto";
    mostrarMensaje("Edita los datos y presiona Actualizar producto.", "info");
}

async function eliminarProducto(id) {
    const confirmar = confirm("Deseas eliminar este producto?");

    if (!confirmar) {
        return;
    }

    try {
        const respuesta = await fetch(`${URL_BASE}/productos/${id}`, {
            method: "DELETE"
        });

        if (!respuesta.ok) {
            throw new Error("Error al eliminar el producto");
        }

        mostrarMensaje("Producto eliminado correctamente.", "success");
        listarProductos();
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        mostrarMensaje("No se pudo eliminar el producto.", "danger");
    }
}

formProducto.addEventListener("submit", async (event) => {
    event.preventDefault();

    const producto = obtenerDatosFormulario();

    try {
        if (idProductoEditando) {
            await actualizarProducto(idProductoEditando, producto);
            mostrarMensaje("Producto actualizado correctamente.", "success");
        } else {
            await guardarProducto(producto);
            mostrarMensaje("Producto guardado correctamente.", "success");
        }

        limpiarFormulario();
        listarProductos();
    } catch (error) {
        console.error("Error al guardar producto:", error);
        mostrarMensaje("No se pudo guardar el producto.", "danger");
    }
});

listarProductos();
