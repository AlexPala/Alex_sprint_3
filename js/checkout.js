

// Get the input fields




// Get the error elements

 
 
// Exercise 6

function validate(e) {
    e.preventDefault()
    // Validate fields entered by the user: name, phone, password, and email
    
    const soloLetras = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; //no consigo que funcione
    const emailExpresion = /\w+@\w+\.+[a-z]/i; //expresion regular para email
    const passwordExpresion = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/; //expresion numeros y letras
    var name = document.querySelector('.name').value;
    const apellido = document.querySelector('.apellido').value;
    var errorName = document.getElementById('errorName').innerText; 
    var errorPhone = document.getElementById('errorPhone').innerText;
    const direccion = document.getElementById('address').value;
    const email = document.getElementById('correo').value;
    var password = document.querySelector(".password").value;
    var phone = document.querySelector('.phone').value;
    var errorPassword = document.getElementById("errorPassword").innerText;

  if(name.length < 3 || apellido.length < 3) {
    name.classList.add("is-invalid");
    alert('El nombre o apellido es muy corto');
    return false;
  }
  
  if(direccion.length < 3){
      alert('La direccion de envio es muy corta')
      return false;
  }

  if(phone.length < 3 || isNaN(phone)){
      alert(errorPhone)
  } 

  if(!emailExpresion.test(email)) {
      alert('El email no es valido')
  }

  if(!passwordExpresion.test(password)){
      alert(errorPassword)
  } else if(password.length < 3){
     alert('Contraseña debe tener al menos 3 digitos')
}


  if(!isNaN(name || apellido)) {
      alert(errorName)
      return false;
  }
}
