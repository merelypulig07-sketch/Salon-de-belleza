// ========== MENÚ HAMBURGUESA ==========
const btnHamburguesa = document.getElementById('btnHamburguesa');
const enlacesMenu = document.getElementById('enlacesMenu');

btnHamburguesa.addEventListener('click', () => {
    enlacesMenu.classList.toggle('activo');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('#enlacesMenu a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        enlacesMenu.classList.remove('activo');
    });
});

// ========== ANIMACIÓN BARRAS DE HABILIDADES ==========
window.addEventListener('load', () => {
    document.querySelectorAll('.progreso').forEach(barra => {
        const nivel = barra.getAttribute('data-nivel');
        setTimeout(() => {
            barra.style.width = nivel + '%';
        }, 400);
    });
});

// ========== VALIDACIÓN FORMULARIO ==========
const formulario = document.getElementById('formularioContacto');
const campoNombre = document.getElementById('nombre');
const campoEmail = document.getElementById('email');
const campoMensaje = document.getElementById('mensaje');
const confirmacion = document.getElementById('mensajeConfirmacion');

// Validación en tiempo real
campoNombre.addEventListener('input', validarNombre);
campoEmail.addEventListener('input', validarEmail);
campoMensaje.addEventListener('input', validarMensaje);

function validarNombre() {
    const error = this.parentElement.querySelector('.error');
    if (this.value.trim().length < 3) {
        error.textContent = 'El nombre debe tener al menos 3 caracteres';
        return false;
    }
    error.textContent = '';
    return true;
}

function validarEmail() {
    const error = this.parentElement.querySelector('.error');
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patron.test(this.value)) {
        error.textContent = 'Ingresa un correo válido';
        return false;
    }
    error.textContent = '';
    return true;
}

function validarMensaje() {
    const error = this.parentElement.querySelector('.error');
    if (this.value.trim().length < 10) {
        error.textContent = 'El mensaje debe tener al menos 10 caracteres';
        return false;
    }
    error.textContent = '';
    return true;
}

// Envío del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const okNombre = validarNombre.call(campoNombre);
    const okEmail = validarEmail.call(campoEmail);
    const okMensaje = validarMensaje.call(campoMensaje);

    if (okNombre && okEmail && okMensaje) {
        confirmacion.textContent = '✅ ¡Mensaje enviado con éxito!';
        formulario.reset();
    } else {
        confirmacion.textContent = '';
    }
});
