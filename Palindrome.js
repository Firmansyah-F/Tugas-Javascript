// palindrome('Cigar? Toss it in a can. It is so tragic') /// true

var sentence = "Cigar? Toss it in a can. It is so tragic"
var clear = sentence.replace(/\s/g,'')
var a =  clear.replace(/[^\w\s]/gi, '').toLowerCase()

console.log(a)

function palindrome (str) {
    return str == str.split('').reverse().join('');
  }
console.log(palindrome(a))