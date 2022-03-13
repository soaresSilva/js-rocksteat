// function() constructor
// expressão new
// criar um novo objeto
// this keyword

function Person(name) {
    this.name = name // esse this vai sempre referenciar o Alisson lá fora
    this.walk = function() {
        return this.name + " está andando."
    }
}

const Alisson = new Person("Alisson")
const joao = new Person("Joao")
console.log(Alisson.walk())
console.log(joao.walk())