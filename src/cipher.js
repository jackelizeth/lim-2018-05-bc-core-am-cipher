window.cipher = { 

  Encode:  (string, offset) => { // metodo para cifrar
 
 //alert(string);
 
    let text_result ="";
 
    let tamanio = string.length
 
 
    for (let i=0; i<tamanio; i++){
      let pos_Ascii=string.charCodeAt(i);
 
      //alert(pos_Ascii)
 
      let res_formula=(pos_Ascii-65+offset)%26+65;
 
      text_result += String.fromCharCode(res_formula);
 
      }
      return text_result;
 
    },
 
  }
 