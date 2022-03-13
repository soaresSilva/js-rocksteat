// expressões e operadores

let number = 1

// binario
console.log(number++);
// unario
console.log(number+1);
// ternario
console.log(number ? "ok" : "no");

console.log("---------------------------");

// new cria um novo objeto
let name = new String('alisson')
name.surName = 'Soares'

let age = new Number(32)
console.log(name.surName,age);

let date = new Date('2022-02-17')
console.log(date.__proto__);

console.log("---------------------------");

// deletar algum elemento de um objeto
const person = {
    name: 'mayk',
    age: 25
}
delete person.age
console.log(person)

console.log("---------------------------");
