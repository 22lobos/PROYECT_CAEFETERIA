// js/validaciones.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // Obtener campos
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("email");
    const comentarios = document.getElementById("comentarios");

    // Limpiar mensajes previos
    document.querySelectorAll(".error-msg").forEach(e => e.remove());

    let valido = true;

    // Validación de nombre
    if (nombre.value.trim().length < 3) {
      mostrarError(nombre, "El nombre debe tener al menos 3 caracteres");
      valido = false;
    }

    // Validación de correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo.value.trim())) {
      mostrarError(correo, "Debes ingresar un correo válido (ej: ejemplo@mail.com)");
      valido = false;
    }

    // Validación de comentarios
    if (comentarios.value.trim().length < 10) {
      mostrarError(comentarios, "El comentario debe tener al menos 10 caracteres");
      valido = false;
    }

    // Si hay errores, prevenir envío
    if (!valido) {
      event.preventDefault();
    }
  });

  // Función para mostrar errores
  function mostrarError(elemento, mensaje) {
    const span = document.createElement("span");
    span.classList.add("error-msg");
    span.style.color = "red";
    span.style.fontSize = "0.9em";
    span.innerText = mensaje;
    elemento.insertAdjacentElement("afterend", span);
  }
});
