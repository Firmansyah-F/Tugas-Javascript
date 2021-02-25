// declaration function atau statement function
// return function
function hai(name) {
    return `Hai user ${name}`
}
// void function
function hello({name, age}) {
    console.log(name, age)
}
const user = {
    name : "budi",
    age : 10
}
// langsung dengan object
hello(user)
// menulis object ketika memanggil function
hello({name : "lala", age : 11})


// core module readline --> untuk membaca inputan dari terminal / console
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Input Number? ", (number) => {
  // TODO: Log the answer in a database
  if (number % 2 != 0) {
    // ganjil
    console.log("Imperio");
  } else if (number % 2 == 0) {
    // genap
            if (number >= 5 && number <= 10) {
            console.log("Imperio");
            } else {
            console.log("Crucio");
            }
  } else {
      console.log("out of context")
  }
  const checkNumber =
    number % 2 != 0 ? "Imperio" : number % 2 == 0 ? number >= 5 && number <= 10 ? "Imperio" : "Crucio" : "out of context"
    // const test = 5 > 10 ? "test" : "false"
  console.log(checkNumber);
  console.log(`Thank you for your valuable feedback: ${number}`);
  rl.close();
});

function bukhello (...users) {
    console.log(users)

    function hellouser(user) {
        console.log (`hello ${user}`)
    }users.forEach(hellouser)
}
