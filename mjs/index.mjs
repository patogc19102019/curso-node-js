// .js --> por defecto utiliza CommonJS
// .mjs --> por defecto utiliza ESModules
// .cjs --> por defecto utiliza CommonJS

import { sum , mul , sub } from './sum.mjs' 

console.log(sum(1,2))
console.log(sum(3,4))

console.log(mul(1,2))   

console.log(sub(1,2))
