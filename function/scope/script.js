// function scope
let subject = 'create video'
function createThink(subject) { 
    subject = 'study'
    return subject
}
// isso daqui só ocorro por que há parametro, se não tiver parâmetro os 
// dois serão study
console.log(createThink(subject))
console.log(subject)