let techs = ["html","css","js"]

// adicionar itens no fim
techs.push("node.js")
console.log(techs)

// adicionar no começo
techs.unshift("sql")
console.log(techs)

// remover o final
techs.pop()
console.log(techs)

// remover do começo
techs.shift()
console.log(techs)

// pegar somente alguns elementos, a partir do 1 até o 2
console.log(techs.slice(1,2))

// elementos que serão retirados, a partir do 1 e só 1 que vou retirar
techs.splice(1,1)
console.log(techs)

// fazendo uma busca do index a partir do nome
let index = techs.indexOf('js')
techs.splice(index,1)

console.log(techs)