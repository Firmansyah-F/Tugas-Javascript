var rl = require('readline-sync')
var n = rl.questionInt("Masukkan Batas angka : ")
var angka = rl.questionInt("Masukkan angka tebakan : ")
var tebak = 0
var i=0;

do{
    var random =  Math.floor(Math.random() * Math.floor(n))
    if (parseInt(random) != angka){
        console.log("Percobaan Ke- "+ i +" : " + random)
        i++
    }else if (parseInt(random) == angka){
        console.log("Percobaan Ke- "+ i +" : " + random)
        console.log("Angka tebakan didapat pada percobaan ke- "+i)
        break
    }
}while(i<1000)

