//input 1234567

var rl = require('readline-sync')

var input = rl.question('Masukkan Input angka : ')
var angka = input.split('')
var output = []
var x = 1000000

for (i=0; i<angka.length; i++){
    output.push(angka[i] * x)
    x = x/10
}
var hasil = output.join('\n')
console.log(hasil)