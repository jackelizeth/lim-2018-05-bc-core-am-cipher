document.getElementById("Cifrando").addEventListener("click",function(event){

  
  event.preventDefault();//para que la etiqueta form no se nose direccione a la url
   let resul_encriptado = cipher.encode(document.getElementById("ingresando_text").value,document.getElementById("posicion").value);

    document.getElementById("mostrando_text").innerHTML = resul_encriptado;

},false);

document.getElementById("Decifrando").addEventListener("click",function(event){
 event.preventDefault();//
  let resul_desencriptado = cipher.decode(document.getElementById("ingresando_text").value,document.getElementById("posicion").value);

     document.getElementById("mostrando_text").innerHTML = resul_desencriptado;

},false);



