describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
  });
      
  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => { 
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => { 
      assert.equal(typeof cipher.createCipherWithOffset(33), 'object');
      //assert.equal(typeof cipher.createCipherWithOffset(33), 'object');
      // typeof(cipher.createCipherWithOffset(5).encode)
      //(cipher.createCipherWithOffset(5).encode)
      // typeof cipher.createCipherWithOffset(5)
    });
  });
 
});