
let in_text = document.getElementById("ingresando_text");
// captuta la etiqueta textarea del id "ingresando_text" donde ingresana informacion
let in_position = document.getElementById("posicion");
// captuta la etiqueta input del id "posicion" donde se ingresa un numero que indica cuanto se avansa
let output = document.getElementById("mostrando_text"); // output = salida 
// captuta la etiqueta span del id "mostrando_text" donde se muestra el resultado


let btn_encode = document.getElementById("Cifrando");
let btn_decode = document.getElementById("Decifrando");

/* target.addEventListener(tipo, listener[, useCapture]);Registra un evento a un objeto en específico (al button Cifrando)
   ejm target.addEventListener(nombre del evento, es objeto o solo una function[, boolean: true o false por defecto]);*/
btn_encode.addEventListener("click", function(event) {
/* event.preventDefault() Cancela el evento, sin detener el resto del funcionamiento del evento es decir, 
   puede ser llamado de nuevo. (para que la etiqueta <form>  nose direccione a la url)  */
  event.preventDefault();
  
  // el objeto cipher , su metodo encode y sus (parametros)
  let result_encode = cipher.encode(in_text.value,in_position.value);
  output.innerHTML = result_encode;

});

btn_decode.addEventListener("click",function(event) {
  event.preventDefault();

// el objeto cipher , su metodo decode y sus (parametros)
  let result_decode = cipher.decode(in_text.value,in_position.value);
  output.innerHTML = result_decode;

});



