window.cipher = {
    // metodo encode (codifica) 
    // string texto que se quiere cifrar
    // offset el numero de posicion que se movera a la derecha
  encode : (string, offset) => { 
    let result = "";
    /* parseInt(string, base) : Convierte (parsea): de un string a numero
       ejm el  parseInt("F", 16)  devuelve de resultado 15 */
    let valueOffset = parseInt(offset) 
    /* string.length : es para obtener la longitud de un string o cadena (cantidad los caracteres)
       (la propiedad length de un objeto String devuelve la longitud de una string)
       ejm string.length de "your name" la longitud del string es 9 */
    for (let i = 0; i < string.length; i++) {
    /* string.toUpperCase() = String.prototype.toUpperCase() : este método devuelve el string convertida
       a mayúsculas.*/
    /* el método string.charCodeAt(i) = String.prototype.charCodeAt() : devuelve un número "codigo ASCII"(Unicode)
       del carácter de una letra - Unicode aportar un único punto de código para cada carácter - (i) si no se especifica,
       su valor predeterminado es 0.*/
      const code_ascii = string.toUpperCase().charCodeAt(i); 
      // 32 representa el espacio entre las letras
      if (code_ascii === 32) {
       result += " ";
      } else {
        const result_formula = (code_ascii - 65 + (valueOffset)) % 26 + 65;
    // ejm: "A" su code es 65 entonces  (65 - 65 + (valueOffset = 2)) % 26 + 65 = 67 entonces... 
    /* String.fromCharCode(num1, ..., numN) : Este método devuelve una "string" y no un objeto String "number".
       del ejm anterior "A" su code es 65 aplicamos String.fromCharCode(67) nos devolvera la letra "c" */
        result += String.fromCharCode(result_formula);
        // (x = x + y)  del ejemplo anterior el result seria "c"
      }
   }
   return result;
  },
    // metodo decode (descodificar) 
    // string texto que se quiere decifrar
    // offset el numero de posicion que se movera a la izquierda
  decode : (string, offset) => {
    let result = "";
    let valueOffset = parseInt(offset) 
    for (let i = 0; i < string.length; i++) {
      const code_ascii = string.toUpperCase().charCodeAt(i);
      if (code_ascii === 32) {
        result += " ";
      } else {
        const result_formula = (code_ascii + 65 - (valueOffset)) % 26 + 65;
        result += String.fromCharCode(result_formula);
      }
   }
   return result;
 },

  createCipherWithOffset: (offset) => { 
    return {
    encode: (string) =>  cipher.encode(string, offset),
    decode: (string) =>  cipher.decode(string, offset)
    };
  },
};