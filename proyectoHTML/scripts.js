document.addEventListener('DOMContentLoaded', function() {
    // Función para validar el formulario
    function validarFormulario() {
      var rut = document.getElementById('rut').value;
      var apellidoPaterno = document.getElementById('apellidoPaterno').value;
      var apellidoMaterno = document.getElementById('apellidoMaterno').value;
      var nombre = document.getElementById('nombre').value;
      var fechaNacimiento = document.getElementById('fechaNacimiento').value;
      var edad = document.getElementById('edad').value;
      var genero = document.getElementById('genero').value;
      var email = document.getElementById('email').value;
      var celular = document.getElementById('celular').value;
      var profesion = document.getElementById('profesion').value;
      var motivacion = document.getElementById('motivacion').value;
  
      // Realizar validaciones
      // Aquí deberías implementar las validaciones según los requerimientos
  
      // Por ejemplo, validación de edad
      if (edad < 18 || edad > 35) {
        alert('La edad debe estar entre 18 y 35 años.');
        return false;
      }
  
      // Si todas las validaciones pasan, se enviará el formulario
      return true;
    }
  
    // Evento submit para el formulario
    document.getElementById('postulacionForm').addEventListener('submit', function(event) {
      if (!validarFormulario()) {
        event.preventDefault(); // Evitar envío del formulario si la validación falla
      }
    });
  
    // Función para crear la carta de presentación
    document.getElementById('crearCartaBtn').addEventListener('click', function() {
      var rut = document.getElementById('rut').value;
      var apellidoPaterno = document.getElementById('apellidoPaterno').value;
      var apellidoMaterno = document.getElementById('apellidoMaterno').value;
      var nombre = document.getElementById('nombre').value;
      var fechaNacimiento = document.getElementById('fechaNacimiento').value;
      var edad = document.getElementById('edad').value;
      var genero = document.getElementById('genero').value;
      var email = document.getElementById('email').value;
      var celular = document.getElementById('celular').value;
      var profesion = document.getElementById('profesion').value;
      var motivacion = document.getElementById('motivacion').value;
  
      // Crear la carta de presentación
      var carta = "Estimados,\n\n" +
                  "Me llamo " + nombre + " " + apellidoPaterno + " " + apellidoMaterno + " y tengo " + edad + " años.\n" +
                  "Mi rut es " + rut + ". Nací el " + fechaNacimiento + ".\n" +
                  "Me identifico como " + genero + ".\n" +
                  "Mi email es " + email + " y mi número de celular es " + celular + ".\n\n" +
                  "Soy " + profesion + " y quiero postularme al trabajo en la isla de Chiloé con la Fundación 'Chile Limpio' porque " + motivacion + ".\n\n" +
                  "Quedo atento/a a su respuesta.\n\n" +
                  "Saludos cordiales,\n" +
                  nombre + " " + apellidoPaterno + " " + apellidoMaterno;
  
      // Asignar la carta al textarea
      document.getElementById('carta').value = carta;
    });
  });
  