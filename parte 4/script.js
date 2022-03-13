// FALSY
// quando um valor é falso em contexto onde um boooleano é obrigatorio

console.log(0 ? 'verdadeiro' : 'false')

// truthy 
// quando um valor é verdadeiro em contexto onde um boooleano é obrigatorio

console.log({} ? 'verdadeiro' : 'false')

// precedencia


console.log(15 != 12 * 545 && !!(true && !12 *(158/22)**2 != 15 <= (125 ==0)) || !15 <=15)