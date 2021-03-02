const fs = require('fs');

function list(){

        const json = fs.readFileSync('./todo.json', 'utf8');
        let base = JSON.parse(json)
        const mapping = base.map((e) => {
            return (` ${e.id}. ${e.todo}`)
        })
        mapping.forEach(element => console.log(element));

}
// list()

function add(params){
        const json = fs.readFileSync('./todo.json', 'utf8');
        // console.log(json)

        let base = JSON.parse(json)
        let plusId = base.length + 1
        // console.log(plusId)

        let add = {
            id           : plusId,
            status       : false,
            todo         : params,
            delete_stat  : false
        }

        base.push(add)

        let data = JSON.stringify(base, null, 2);

        fs.writeFile('todo.json', data, (err) => {
            if (err) throw err;
            console.log('Data written is done');
        });

}
// add()

function update(obj,baru){
    const json = fs.readFileSync('./todo.json', 'utf8');
    // console.log(json)

    let base = JSON.parse(json)
    const newloop = base.map((e) => {
        if (e.id == obj) {
            // console.log(e.id , e.todo)
            e.todo = baru  
            return e
        }else {
            return e
        }
    }) 
    // console.log(newloop)

    let data = JSON.stringify(newloop, null, 2);

    fs.writeFile('todo.json', data, (err) => {
        if (err) throw err;
        console.log('Data written is done');
    });
}
// update()

function del(obj){
    const json = fs.readFileSync('./todo.json', 'utf8');
    // console.log(json)

    let base = JSON.parse(json)
    const looping = base.map((e) => {
        if (e.id == obj) {
            e.delete_stat = true
            return e
        }else {
            return e
        }
    }) 
    // console.log(newloop)

    let data = JSON.stringify(looping, null, 2);

    fs.writeFile('todo.json', data, (err) => {
        if (err) throw err;
        console.log('Data written is done');
    });
}


function clear(){
    const json = fs.readFileSync('./todo.json', 'utf8');

    let base = JSON.parse(json)
    // console.log(base.length)
    let baseclear = json.slice(0, base.length)

    let data = JSON.stringify(baseclear, null, 2);

    fs.writeFile('todo.json', data, (err) => {
        if (err) throw err;
        console.log('Data written is done');
    });
}
// clear()

function done(id) {
    const json = fs.readFileSync('./todo.json', 'utf8');
    // console.log(json)

    let base = JSON.parse(json)

    let dataMap = base.map((e) => {
      if (e.id == id) {
        e.status = true;
        return e;
      } else {
          return e
      }
    });
    let data = JSON.stringify(dataMap, null, 2);

    fs.writeFile('todo.json', data, (err) => {
        if (err) throw err;
        console.log('Data written is done');
    });
  }
  

function undone(id) {

    const json = fs.readFileSync('./todo.json', 'utf8');
    // console.log(json)

    let base = JSON.parse(json)
    let dataMap = base.map((e) => {
        if (e.id == id) {
          e.status = false;
          return e;
        } else {
            return e
        }
      });
      let data = JSON.stringify(dataMap, null, 2);

      fs.writeFile('todo.json', data, (err) => {
          if (err) throw err;
          console.log('Data written is done');
      });
}

function status() {
    const json = fs.readFileSync('./todo.json', 'utf8');
    // console.log(json)

    let base = JSON.parse(json)
    base.map((e) => {
      if (e.status == true && e.delete_stat == false) {
        const done = 'Done'
        // return `${e.id}. ${e.todo} (${done})`;
        console.log(`${e.id}. ${e.todo} (${done})`)
      } else if (e.delete_stat != true){
        // return `${e.id}. ${e.todo} `;
        console.log(`${e.id}. ${e.todo} `)
      }
    });
  }

// // #!/usr/bin/env node
const { program } = require("@caporal/core")

program
    .command("list", "Menampilkan List kegiatan")
    .action(({ logger , args}) => {
        list()

    })

    .command("add", "Menambahkan Kegiatan baru")
    .argument("<kegiatan>","kegiatan yang ingin ditambahkan")
    .action (({args}) => {
        add(args.kegiatan)
    })

    .command("update", "Memperbarui Kegiatan ")
    .argument("<id>","id yang ingin diperbarui")
    .argument("<kegiatan>","kegiatan yang ingin diperbarui")
    .action (({args}) => {
        // console.log(args.id, args.kegiatan)
        update( args.id, args.kegiatan)
    })
    
    .command("delete", "Memperbarui Kegiatan ")
    .argument("<id>","id yang ingin diperbarui")
    .action (({args}) => {
        // console.log(args.id, args.kegiatan)
        del( args.id)
    })
    .command("clear", "Memperbarui Kegiatan ")
    .action (({args}) => {
        // console.log(args.id, args.kegiatan)
        clear()
    })

    .command("done", "Delete berdasarkan ID")
    .argument("<id>", "ID Done")
    .action(({  args }) => {
      done(args.id);
    })
  
    .command("undone", "Delete berdasarkan ID")
    .argument("<id>", "ID undone")
    .action(({ args }) => {
      undone(args.id);
    })

    .command("status", "Delete berdasarkan ID")
    .action(({ args }) => {
      status();
    });


program.run()
    

