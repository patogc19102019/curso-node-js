const os = require('node:os')

console.log('Informacion del sistema operativo')
console.log('------------------------------')
console.log('Nombre Del Sistema Operativo: ' , os.platform())
console.log('Version Del Sistema Operativo: ' , os.release())
console.log('Arquitectura Del Sistema Operativo: ' , os.arch())
console.log('CPUS', os.cpus())
console.log('Memoria Total', os.totalmem() / 1024 / 1024)
console.log('Memoria Libre', os.freemem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)