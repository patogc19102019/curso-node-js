//esto solo en los modulos nativos
//que no tienen promesas nativas

// const {promisify} = require('node:util')
// const readFile = promisify(fs.readFile)

const {readFile} = requiere('node:fs/promises')

console.log('leyendo el primer archivo')
const text = await fs.readFile('./archivo.txt','utf-8', )
console.log('Primer texto',text)

console.log('hacer cosas mientras se lee el archivo')


console.log('leyendo el segundo archivo')
const secondtext = await fs.readFile('./archivo2.txt','utf-8')
console.log('Segundo texto',secondtext)

