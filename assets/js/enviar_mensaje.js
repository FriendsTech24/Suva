const evento = document.getElementById('send');

const enviarFormulario = () => {
  let nombre = document.getElementById('nombre').value;
  let asunto = document.getElementById('asunto').value;
  let mensaje = document.getElementById('mensaje').value;
  let numero = 50259554001;

  var win = window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}%20Asunto:%20${asunto},%20${mensaje}`, '_blank');
  win.addEventListener('load', () => {
      // Recargar la página principal cuando la ventana emergente se carga
      win.opener.location.reload();
    });
}

evento.addEventListener('click', enviarFormulario);