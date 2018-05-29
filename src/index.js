document.getElementById("Cifrando").addEventListener("click",function(event){

  event.preventDefault();//para que el formulario no se envie a la direccion del action

  let result = window.cipher.Encode(document.getElementById("texto_origen").value,document.getElementById("posicion").value);

  document.getElementById("texto_resultado").value =result;


},false);


document.getElementById("Decifrando").addEventListener("click",function(event){
 event.preventDefault();//para que el formulario no se envie a la direccion del action

 let result =  window.cipher.Decode(document.getElementById("texto_origen").value,document.getElementById("posicion").value);

 document.getElementById("texto_resultado").value =result;

},false);

