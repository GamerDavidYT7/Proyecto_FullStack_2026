const usuarioGuardado = localStorage.getItem("usuario");
const btnCerrarSesion = document.getElementById("btnCerrarSesion");

if (!usuarioGuardado) {
    const mensaje = document.createElement("div");
    mensaje.className = "alert alert-warning text-center m-3";
    mensaje.textContent = "Debe iniciar sesion para ingresar al panel administrativo.";

    document.body.prepend(mensaje);

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
} else {
    console.log("Usuario autenticado:", JSON.parse(usuarioGuardado));
}

if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener("click", () => {
        localStorage.removeItem("usuario");
        window.location.href = "login.html";
    });
}
