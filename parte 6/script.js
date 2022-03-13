// estrutura de repetição

// for
// break e continue 
for (let i = 0; i < 15; i++) {
    if (i === 12) {
        break;
    }
    if (i === 10) {
        continue;
    }
    console.log(i)
}

// for off 
// ele vai pegar cada caracter e inserir numa variável
let name = 'Alisson'
for (let char of name) {
    console.log(char)
}

// for in 
let person = {
    name:'alisson',
    age:30,
    weight: 70
}

for (let property in person){
    console.log(property);
    console.log(person[property]);
}
