window.cipher = { 
  
  encode : (string , offset) => { 
    // metodo para cifrar

    let resultado ="";
    let valorOffset = parseInt(offset) 

    for (let i = 0; i < string.length; i++){
      //lenght cuenta los caracteres del string
      let posicion_Ascii = string.toUpperCase().charCodeAt(i); 
      // el charCodeAt para obtener el codigo ascii de 1 letra
     
      let res_formula = (posicion_Ascii - 65 + (valorOffset)) %26 +65;
    
     resultado += String.fromCharCode(res_formula);//el fromCharCode para convertir el codigo ascii a 1 letra 
    
    }
    return resultado;
  },
  
  decode : (string , offset) => { // metodo para cifrar
   
       let resultado =" ";
       let valorOffset = parseInt(offset) 
   
       for (let i = 0; i < string.length; i++){//lenght cuenta los caracteres del string
         let posicion_Ascii = string.toUpperCase().charCodeAt(i); // el charCodeAt para obtener el codigo ascii de 1 letra
       
       
         let res_formula = (posicion_Ascii + 65 - (valorOffset)) %26 +65;
       
        resultado += String.fromCharCode(res_formula);//el fromCharCode para convertir el codigo ascii a 1 letra 
      
       }
       return resultado;
     },

};
 