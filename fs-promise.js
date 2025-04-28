//esto solo en los modulos nativos
//que no tienen promesas nativas

// const {promisify} = require('node:util')
// const readFile = promisify(fs.readFile)

const fs=require('node:fs/promises')

console.log('leyendo el primer archivo')
fs.readFile('./archivo.txt','utf-8', )
    .then(text=>{
        console.log('Primer texto',text)
    })

console.log('hacer cosas mientras se lee el archivo')


console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt','utf-8')
    .then(text=>{
        console.log('Segundo texto',text)
})

