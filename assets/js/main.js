document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData(this);
      const message = [
        'Hola, SaraHealth. Quisiera solicitar información.',
        'Nombre: ' + data.get('nombre'),
        'Teléfono: ' + data.get('telefono'),
        'Servicio: ' + data.get('servicio'),
        'Ciudad: ' + (data.get('ciudad') || 'No especificada'),
        'Mensaje: ' + (data.get('mensaje') || 'Quisiera recibir orientación.')
      ].join('\n');
      window.open('https://wa.me/573113138893?text=' + encodeURIComponent(message), '_blank');
    });
