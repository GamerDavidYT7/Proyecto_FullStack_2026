const formLogin = document.getElementById("formLogin");
const mensajeLogin = document.getElementById("mensajeLogin");

function mostrarMensajeLogin(texto, tipo) {
    mensajeLogin.textContent = texto;
    mensajeLogin.className = `alert alert-${tipo} mt-3`;
}
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();

    if (correo === "" || password === "") {
        mostrarMensajeLogin("Correo y contrasena son obligatorios.", "warning");
        return;
    }
    async function login() {
        try {
            const respuesta = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    correo: correo,
                    password: password
                })
            });
            const data = await respuesta.json();
            if (data.ok === true) {
                localStorage.setItem("usuario", JSON.stringify(data.usuario));
                mostrarMensajeLogin(data.mensaje, "success");

                setTimeout(() => {
                    window.location.href = "admin-productos.html";
                }, 1000);
            } else {
                mostrarMensajeLogin(data.mensaje || "Credenciales incorrectas.", "danger");
            }
        } catch (error) {
            console.error("Error en la solicitud de login:", error);
            mostrarMensajeLogin("Error al conectar con el servidor.", "danger");
        }
    }
    login();
});