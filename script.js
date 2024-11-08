window.onload = function () {
  document.getElementById("enviar").onclick = mainAccion;
};

function mainAccion() {

  validateEmail();
  validarPassword();
  repeatPassword();
  

}

//La contraseña debe tener lo siguiente (Todo obligatorio): 
/*
1. Al menos dos mayúsculas.
2. Al menos un carácter de los siguientes: * / - # ~
3. Al menos tres números entre 5 y 9
4. Un tamaño de entre 10 y 15
*/
function validarPassword() {
  let password = document.getElementById("password").value;

  let mayuscula = 2;
  let especial = 0;
  let numeros = 0;
  let character = ["*", "/", "/", "-", "#", "~"]
  
  if (password.length < 10 || password.length > 15) {
    alert("La contraseña debe tener un tamaño entre 10 y 15");
    return false;
  }
  for (let i = 0; i < password.length; i++) {
  
  if (password[i] == password[i].toUpperCase()) {
    mayuscula++;
  }
  if (character.includes(password[i])) {
    especial++;
  }

  if (password[i] >= 5 && password[i] <= 9) {
    numeros++;
  }
  
  }
  if (mayuscula < 2) {
    alert("La contraseña debe tener al menos dos mayúsculas");
    return false;
  }
  if (especial < 1) {
    alert("La contraseña debe tener al menos un carácter de los siguientes: * / - # ~");
    return false;
  }
  if (numeros < 3) {
    alert("La contraseña debe tener al menos tres números entre 5 y 9");
    return false;
  }

  return true;
  
}

function repeatPassword() {
  let password = document.getElementById("password").value;
  let repeatPassword = document.getElementById("repeatPassword").value;
  if (password != repeatPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

}



function validateEmail() {

  let inputMail = document.getElementById("email").value;
  let mailexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

  if (!(mailexp.test(inputMail))) {

    alert("No es válido el correo electronico");
    return;
  }
}

