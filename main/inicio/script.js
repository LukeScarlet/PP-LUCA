document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
      window.location.href = "./login/index.html";
  }
});

/* CRIACAO DE VARIAVEIS */

let button1 = document.getElementById('botao1')
let button2 = document.getElementById('botao2')

/* BOTAO DE REGISTRO PARA SER DIRECIONADO */

button1.addEventListener('click', function() {
  window.location.href = "../registro/registro.html";
});

/* BOTAO DE LOGIN PARA SER DIRECIONADO */

button2.addEventListener('click', function() {
  window.location.href = "../login/index.html";
});