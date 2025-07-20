document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita recargar la página

    // Mostrar mensaje de confirmación
    const confirmar = confirm('¿Estás seguro de enviar tu formulario?');

    if (!confirmar) {
      return; // El usuario canceló
    }

    // Captura de datos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      alert('Por favor completá todos los campos.');
      return;
    }

    // Simulación del envío (se puede integrar con EmailJS, etc.)
    console.log('Formulario enviado:', { nombre, email, mensaje });

    form.reset(); // Limpia el formulario
    alert('Gracias por contactarnos, ' + nombre + '. ¡Te responderemos pronto!');
  });
});
