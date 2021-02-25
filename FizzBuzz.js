var rl = require('readline-sync')
var n = rl.questionInt("Masukkan Batas angka : ")

function FizzBuzz(){
    let i = 0
    do {
        i++
        if (i%2 == 0){
            if (i%3 == 0){
                console.log(i + ".Fizz Buzz")
            }else {
                console.log(i + ".Fizz")
            }
        }
        else if (i%3 == 0){
            console.log(i + ".Buzz")
        }
        else {
            console.log (i)
        }
        
    } while (i < n);
}
FizzBuzz()