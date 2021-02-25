var rl = require("readline")
var n = rl.questionInt("Input Nilai n : ")
// var n = 15

if (n%2 != 0){
    console.log("Impertio")
} else if (n%2 == 0){
    if (n >= 5 && n <= 10){
        console.log("Imperio")
    }
    else {
        console.log("Crucio")
    }
} 
