window.cipher = { 

  encode:  (string, offset) => { // metodo para cifrar
 //alert(string);
    let resultado ="";
    
    for (let i = 0; i < string.length; i++){//lenght es la cantidad de string
      let posicion_Ascii = string.charCodeAt(i);
      //charCodeAt (0)empieza con cero y cero es 65 = a la letra A
      //charCodeAt (1)empieza con cero y cero es 65 = a la letra 

      //alert(posicion_Ascii)
 
      let res_formula = (posicion_Ascii-65+offset)%26+65;
 
      resultado += String.fromCharCode(res_formula);
 
      }
      return resultado;
 
    },
 
  }
 