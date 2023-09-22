const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");

// Define un usuario y contraseña de ejemplo (reemplázalos con los reales)
const usuarioCorrecto = "lenin";
const contraseñaCorrecta = "lenin";

loginButton.addEventListener("click", () => {
    const usuarioIngresado = prompt("Usuario:");
    const contraseñaIngresada = prompt("Contraseña:");

    if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
        const nombreUsuario = obtenerNombreUsuario(); // Puedes reemplazar esto con la forma en que obtienes el nombre de usuario real
        mostrarMensajeBienvenida(nombreUsuario);
        // Aquí puedes redirigir al usuario a una página de inicio de sesión exitoso
    } else {
        alert("Inicio de sesión fallido. Por favor, verifica tus credenciales.");
    }
});

// Muestra u oculta el formulario de inicio de sesión cuando se hace clic en el botón de inicio de sesión en el encabezado
loginButton.addEventListener("click", () => {
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
});

function obtenerNombreUsuario() {
    // Aquí puedes obtener el nombre de usuario real, por ejemplo, consultando una base de datos
    // En este ejemplo, se utiliza un prompt para ingresar el nombre de usuario
    return prompt("Ingresa tu nombre de usuario:");
}

function mostrarMensajeBienvenida(nombreUsuario) {
    alert(`¡Bienvenido, ${nombreUsuario}! Inicio de sesión exitoso.`);
}
