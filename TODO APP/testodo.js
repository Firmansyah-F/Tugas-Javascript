
const fs = require('fs');




function writeJSON(dir, object){
    const json = fs.readFileSync('./todo.json', 'utf8');
    console.log(json)

    let base = JSON.parse(json)
    console.log(base)

    let add = {
        id      : base.length +1,
        todo    : object,
        status  : false,
        delete  : false
    }

    base.push(add)

    let data = JSON.stringify(base, null, 2);

    fs.writeFile('tes.json', data, (err) => {
        if (err) throw err;
        console.log('Data written is done');
    });

}
writeJSON()


// const todo =  read()


// // #!/usr/bin/env node
// const { program } = require("@caporal/core")


// program
//     .command("list", "Menampilkan List kegiatan")
//     .argument("<kegiatan>","kegiatan")
//     .action(({ logger , args}) => {
//         console.log(args)
//         console.log(args.kegiatan.data)
//     })
//     .command("add", "Menambahkan List kegiatan")
//     .argument("<kegiatan>","kegiatan")
//     .action(({ logger , args}) => {
//         console.log(args)
//         console.log(args.kegiatan.data)
//     })
//     .command("update", "Memperbaharui List kegiatan")
//     .argument("<kegiatan>","kegiatan")
//     .action(({ logger , args}) => {
//         console.log(args)
//         console.log(args.kegiatan.data)
//     })
//     .command("del", "Menampilkan List kegiatan")
//     .argument("<kegiatan>","kegiatan")
//     .action(({ logger , args}) => {
//         console.log(args)
//         console.log(args.kegiatan.data)
//     })


