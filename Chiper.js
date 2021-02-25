
var CryptoJS = require("crypto-js");

class chiper {
    print() {
    // Encrypt
    const ciphertext = CryptoJS.AES.encrypt('Mobile Legend 223', 'qwerty9993').toString();
 
    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'qwerty9993');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
     
    console.log(ciphertext); 
    console.log(originalText);  
    }
}
const cip = new chiper
cip.print()

