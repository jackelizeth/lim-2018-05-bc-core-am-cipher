window.cipher = { 

  encode:  (string, offset) => { // metodo para cifrar
 //alert(string);
    let resultado ="";
    
    for (let i = 0; i < string.length; i++){//lenght cuenta los caracteres del string
      
      let posicion_Ascii = string.charCodeAt(i); // el charcodeat muestra la equivalencia del codigo ascii

    //alert(posicion_Ascii);

      //charCodeAt (0)empieza con cero y cero es 65 = a la letra A
      //charCodeAt (1)empieza con cero y cero es 65 = a la letra 

      //alert(posicion_Ascii);
 
      let res_formula = (posicion_Ascii-65+parseInt(offset))%26+65;

     //alert(res_formula);
 
      resultado += String.fromCharCode(res_formula);

     // alert(resultado)

      }
      return resultado;
 
    },
 
  }
 