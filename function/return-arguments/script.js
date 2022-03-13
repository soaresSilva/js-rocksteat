// function expression
const sum = function(number1,number2) // parameters 
{
    let total = (number1 + number2)
    return total
}

//chamadas de função
sum(2,3) // arguments
console.log(sum(2,3))

let number1 = 30
let number2 = 32

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`O total é ${sum(number1,number2)}`)