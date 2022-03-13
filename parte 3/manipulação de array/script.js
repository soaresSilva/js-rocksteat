// criar um array com constructor

let myArray = new Array('a','b','c')
console.log(myArray)

// contar elementos de array
// eu vou imprimir uma Array, que na posição 0 tem uma String, no proxímo tem um objeto de um elemento e na posição 2 tem uma função que devolve uma string, e no fim de tudo, vai imprimir a quantidade de elementos dentro do array
console.log([
    "a",
    {type: "array"},
    function() {return "alô"},
].length)

// eu posso acessar o local 2 do array
console.log([
    "a",
    {type: "array"},
    function() {return "alô"},
][2])

// como é uma função eu posso executá-la
console.log([
    "a",
    {type: "array"},
    function() {return "alô"},
][2]())

// transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log(Array.from(word))