const formulario = document.getElementById('formulario');
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mostrar mensaje de confirmación
        mensajeConfirmacion.classList.add('mostrar');
        
        // Limpiar formulario
        formulario.reset();
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            mensajeConfirmacion.classList.remove('mostrar');
        }, 5000);
    });