const express = require("express");
const app = express();
const port = 3000;

// CRUD
// routing nya mengarah ke root "/"
const fs = require('fs');

const json = fs.readFileSync('./todo.json', 'utf8');
    // console.log(json)

let base = JSON.parse(json)


const loop = base.map((e) => {
      return e
})
console.log(loop[0])



app.get("/users", (req, res) => {

        res.json(base)
      })
   

app.delete("/users/1/del", (req, res) => {
    console.log(req.base)
    // const delete = deleteUsers(req.params.id)
    res.json({
        "message" : `success delete ${req.loop[0]} !`
    })
})

app.post("/user/post", (req, res) => {
    console.log(req.base)
    
    res.json({
      "message": `succes menambahkan ${res.base}`
  });
})

app.patch(`/user/1/patch`, (req, res) => {
  console.log(req.base)
  
  res.json({
    "message": `succes update data ${res.loop[0]}`
  })
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
