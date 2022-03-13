// if e else 

let temperature = 36.5

if (temperature >= 37) {
    console.log('febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('Febril');
} else {
    console.log('Saudável');
}

// switch 
let expression = 1

switch (expression) {
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('se arrume')
        break
}