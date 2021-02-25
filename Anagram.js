// anagram('hello world', 'world hello') /// true

// anagram('hellow world', 'hello there') /// false

// anagram('hellow world', 'hello there!') /// false

var rl = require('readline-sync')
var Kalimat1 = rl.question("Massukkan Kalimat pertama = ").replace(/\s/g,'');
var Kalimat2 = rl.question("Massukkan Kalimat kedua = ").replace(/\s/g,'');


var array1 = Kalimat1.split('');
var array2 = Kalimat2.split('');

console.log(array1)
console.log(array2)

if (array1.length == array2.length){
    console.log ("true => Kalimat ini anagram")
}else{
    console.log ("false => Kalimat ini bukan anagram")
}


// for (let x = 0; x < arrkalimat.length; x++) {
//     var kata = arrkalimat[x].split('');
//     var a = kata.length - 1;
//        arrBalik[a] = kata[i];
//         a--;
//     }

//     for (let j = 0; j < arrBalik.length; j++) {
//         kalimatbalik += arrBalik[j];
//     }
    
//     console.log(kalimatbalik);
//     var kalimatbalik = "";
//     for (let i = 0; i < kata.length; i++) {
//      if (arrkalimat[x] == kalimatbalik) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }

// }

// var rl = require('readline-sync')

// var Kalimat = rl.question("Massukkan Kalimat = ")
// Kalimat = Kalimat.toLowerCase()
// var arrkalimat = Kalimat.split('')
// console.log(arrkalimat);
// var a = arrkalimat.toString()

// var balik = arrkalimat.reverse()
// console.log(balik);
// var b = balik.toString()
// console.log(a)
// console.log(b)
// if (a == b) {
//         console.log("YES =>> kalimat bisa di balik")
//     } else {
//         console.log("NO =>> kalimat tidak bisa dibalik")}