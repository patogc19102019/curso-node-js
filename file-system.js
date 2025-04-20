const fs = require('node:fs')// apartir de node js 16 , se recomienda poner node:

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),//si es fichero
    stats.isDirectory(),//si es directorio
    stats.isSymbolicLink(),// si es un enlace simbolico
    stats.size, //tamaño en bites   
)