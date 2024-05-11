  /*--------------------------------------------------------------
    8. Dynamic contact form
  --------------------------------------------------------------*/

  const form = document.getElementById('form');
  const result = document.getElementById('result');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        Swal.fire({
          title: 'Complete el Captcha',
          icon: 'error',
          confirmButtonText: 'Cerrar',
          confirmButtonColor: "#345D7E",
          backdrop: true,
         })
        return
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Por favor espere......"
  
      fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                Swal.fire({
                      title: 'Mensaje Enviado',
                      icon: 'success',
                      confirmButtonText: 'Cerrar',
                      confirmButtonColor: "#345D7E",
                      backdrop: true,
                     }).then(() => {
                      location.reload(); // Recargar la página después de cerrar el cuadro de diálogo
                    });
                  
              } else {
                  console.log(response);
                  result.innerHTML = json.message;
              }
          })
          .catch(error => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
          })
          .then(function() {
              form.reset();
              setTimeout(() => {
                  result.style.display = "none";
              }, 3000);
          });
  });