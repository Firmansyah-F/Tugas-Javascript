//pilar2 cliapp
// app      =required
// command  =required
// argument =require/ optional
// option    =optional 
// angled brackets = <text> = required (tdk blh d skip)
// squre brackets  = [text] = optional 
// logger = print
// #!/usr/bin/env node

const { program } = require("@caporal/core")

program.action(({ logger }) => {
  logger.info("Hello, world!")
})

program
    .command("lowercase", "merubah abjad menjadi huruf kecil")
    .argument("<text>","text yang akan di ubah")
    .option("-p, --prefix", "prefix result")
    // .argument("arg")
    .action(({ logger , args, options}) => {
        console.log(args)
        console.log(options)
        console.log(args.text.toLowerCase())
        logger.info("lowercase")
    })
    .command ("uppercase", "Huruf besar text")
    .action(() => {
        console.log("Uppercase")
    })
program.run()

