
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
    Decode:  (string, offset) => { //  metodo para decifrar

      //alert(string);

      /*
      let cipheredMessage='';
      for (let i=0; i<string.length; i++){
        let posicionAscii=string.charCodeAt(i);
        let x=(posicionAscii+65-offset)%26+65;
        cipheredMessage = cipheredMessage+String.fromCharCode(x);
        }
        return cipheredMessage;

*/


      }
};


  

