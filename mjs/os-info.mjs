import { platform, release, arch, cpus, totalmem, freemem, uptime } from 'node:os'

console.log('Informacion del sistema operativo')
console.log('------------------------------')
console.log('Nombre Del Sistema Operativo: ' , platform())
console.log('Version Del Sistema Operativo: ' , release())
console.log('Arquitectura Del Sistema Operativo: ' , arch())
console.log('CPUS', cpus())
console.log('Memoria Total', totalmem() / 1024 / 1024)
console.log('Memoria Libre', freemem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)