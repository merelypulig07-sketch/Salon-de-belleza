// ---------- MENÚ HAMBURGUESA ----------
const btnMenu = document.getElementById('btnMenu');
const menuPrincipal = document.getElementById('menuPrincipal');

btnMenu.addEventListener('click', () => {
    menuPrincipal.classList.toggle('activo');
});

document.querySelectorAll('#menuPrincipal a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuPrincipal.classList.remove('activo');
    });
});

// ---------- ANIMACIÓN DE BARRAS ----------
window.addEventListener('load', () => {
    document.querySelectorAll('.barra-progreso').forEach(barra => {
        const nivel = barra.getAttribute('data-nivel');
        setTimeout(() => {
            barra.style.width = nivel + '%';
        }, 400);
    });
});

// ---------- VALIDACIÓN FORMULARIO ----------
const form = document.getElementById('formContacto');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
const estado = document.getElementById('estadoForm');

function validarCorreo(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    estado.className = 'mensaje-validacion';

    if (nombre.value.trim().length < 3) {
        estado.textContent = '⚠️ El nombre debe tener al menos 3 caracteres.';
        estado.classList.add('error');
        return;
    }
    if (!validarCorreo(correo.value)) {
        estado.textContent = '⚠️ Ingresa un correo electrónico válido.';
        estado.classList.add('error');
        return;
    }
    if (mensaje.value.trim().length < 10) {
        estado.textContent = '⚠️ El mensaje debe tener al menos 10 caracteres.';
        estado.classList.add('error');
        return;
    }

    estado.textContent = '✅ ¡Mensaje enviado con éxito!';
    estado.classList.add('exito');
    form.reset();
});
