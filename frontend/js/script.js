console.log("Script cargado correctamente");

// Capturar formulario
const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        console.log("Evento submit ejecutado");

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const asunto = document.getElementById("asunto").value;
        const mensaje = document.getElementById("mensaje").value;

        console.log("Nombre:", nombre);
        console.log("Correo:", correo);
        console.log("Asunto:", asunto);
        console.log("Mensaje:", mensaje);

        const respuesta = document.getElementById("respuesta");

        // Validación
        if (nombre.trim() === "" || correo.trim() === "" || asunto.trim() === "" || mensaje.trim() === "") {
            respuesta.textContent = "Todos los campos son obligatorios.";
            return;
        }

        // ENVIAR AL BACKEND
        async function enviarDatos() {
            try {
                const respuesta = await fetch("http://localhost:3000/guardar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nombre: nombre,
                        correo: correo,
                        asunto: asunto,
                        mensaje: mensaje
                    })
                });

                const datos = await respuesta.text();
                console.log("Respuesta servidor:", datos);
                respuesta.textContent = "Datos guardados en MySQL correctamente";
                formulario.reset();
            } catch (error) {
                console.error("Error:", error);
                respuesta.textContent = "Error al guardar los datos";
            }
        }

        enviarDatos();
    });
}


// Mostrar productos reales en productos.html
const contenedorProductos = document.getElementById("contenedorProductos");

if (contenedorProductos) {
    cargarProductos();
}

async function cargarProductos() {
    try {
        const respuesta = await fetch("http://localhost:3000/productos");
        const productos = await respuesta.json();
        console.log("Productos recibidos:", productos);
        mostrarProductosEnCatalogo(productos);
    } catch (error) {
        console.error("Error al cargar productos:", error);
        contenedorProductos.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger text-center">
                    No se pudieron cargar los productos.
                </div>
            </div>
        `;
    }
}

function mostrarProductosEnCatalogo(productos) {
    contenedorProductos.innerHTML = "";

    if (productos.length === 0) {
        contenedorProductos.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center">
                    No hay productos registrados.
                </div>
            </div>
        `;
        return;
    }

    productos.forEach((producto) => {
        const columna = document.createElement("div");
        columna.className = "col";

        const imagenProducto = producto.imagen || "https://placehold.co/600x400/e9ecef/212529?text=Producto";

        columna.innerHTML = `
            <div class="card h-100">
                <img
                    src="${imagenProducto}"
                    class="card-img-top"
                    alt="Imagen de ${producto.nombre}"
                />
                <div class="card-body d-flex flex-column">
                    <span class="badge text-bg-primary mb-2 align-self-start">
                        ${producto.categoria}
                    </span>
                    <h2 class="card-title h5">${producto.nombre}</h2>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="fw-bold mb-1">$${producto.precio}</p>
                    <p class="text-muted">Stock: ${producto.stock}</p>
                    <button type="button" class="btn btn-outline-primary mt-auto">
                        Ver producto
                    </button>
                </div>
            </div>
        `;

        contenedorProductos.appendChild(columna);
    });
}
