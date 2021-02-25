const fruit = ["apple", "mangga"]
var [fruitone , fruittwo] = fruit
// console.log (fruitone)

//object
const user = {
    id: 1,
    username : "Fikri",
    age : "10",
    phone : ["342342","32342"],
    address : [
        {
            home  : "dasdad",
            phone : " 231231"
        },
        {
            home  : "sadw3e3e",
            phone : " 234324235"
        },
        {
            home  : "gdfgwer",
            phone : " 5347776"
        },
    ],
    Tilte : {
        academy : "unand"
    }, 
};

// string
const jsonString = JSON.stringify(user, null, 4);


console.log(user.address[0].home)
console.log(user.address[1].home)


// console.log(user);
// console.log(jsonString);

//ternery
const age = 10 
const checkage = 
 age > 20 ? "true" : age > 15 ? "true 15" : age >10 ? "true 10" : false;
 console.log(checkage)

 
