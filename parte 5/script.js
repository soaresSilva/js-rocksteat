// throw... try... catch 

function sayMayName (name = '') {
    if (name=== '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}


// tem que ser utilizado junto com o try
try {
    sayMayName('alisson')
} catch(e) {
    console.log(e)
}