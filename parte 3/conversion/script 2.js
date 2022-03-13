// quantidade de caracteres
let word = "paralelepipedo"
console.log(word.length)
let number = 124587
console.log(String(number).length)

// transformar um número quebrado com 2 casas decimais.
// E trocar o pornto por virgula
let numero = 4585226547.256899745

console.log(numero.toFixed(2).replace(".",","))

// transformar letras minusculas em maiusculas
let palavra = "Programar é demais"
console.log(palavra.toUpperCase())
console.log(palavra.toLowerCase())

// separar textos em espaços do array e depois transforme um array em texto e onde era espaço colocar um _
let phrase = "Eu quero viver o amor"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// quero encontrar em um texto uma palavra específica
let frase = 'Eu quero viver de amar você'
console.log(frase.includes("viver"))