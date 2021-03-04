const e = require('express');
const fs = require('fs');

const json = fs.readFileSync('./todo.json', 'utf8');
    // console.log(json)

let base = JSON.parse(json)
const loop = base.map((e) => {
    return e

})
console.log(loop[2])