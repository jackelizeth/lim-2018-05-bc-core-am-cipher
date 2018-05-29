document.getElementById("Cifrando").addEventListener("click",function(event){

  event.preventDefault();//para que el formulario no se envie a la direccion del action

    let cogiendo_inf = window.cipher.encode(document.getElementById("ingresando_text").value,document.getElementById("posicion").value);

    document.getElementById("mostrando_text").value = cogiendo_inf;

},false);


document.getElementById("Decifrando").addEventListener("click",function(event){
 event.preventDefault();//para que el formulario no se envie a la direccion del action

 let cogiendo_inf =  window.cipher.decode(document.getElementById("ingresando_text").value,document.getElementById("posicion").value);

 document.getElementById("mostrando_text").value =cogiendo_inf;

},false);

