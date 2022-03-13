// operadores de atribuição
let x
console.log(x)

// atribuíção
x = 5
console.log(x)

// atribuíção e soma
x+=2
console.log(x)

// atribuíção e subtração
x-=5
console.log(x)

// ... pode-se fazer isso co outrs operadores matemáticos

console.log("-----------------");
// operados lógicos 

// and &&
let pao = true
let queijo = true
console.log(pao && queijo)

// or ||
console.log(pao || queijo)

// not !
console.log(!(pao || queijo))

console.log("-----------------");

// operador condicional ternário

const niceBreackFast = pao && queijo ? 'café top' : 'café ruim'
console.log(niceBreackFast)

// maior de 18 anos

let idade = 14
maiorDe18 = idade >=18 ? 'can drive' : "can't drive"
console.log(maiorDe18);