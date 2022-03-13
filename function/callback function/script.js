// callback function

function sayMyName(name){
    console.log('antes de executar a função callback')
    name()
    console.log('Depois de executar a função callback')
}

// uma função que toma como referencia uma outra função
// callback é uma função que é chama por outra função
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)