// transformar notas escolares numéricos em tipo alfabético.


function getScore(grades) {
    let gradesA = grades >=90 && grades <= 100
    let gradesB = grades >=80 && grades <= 89
    let gradesC = grades >=70 && grades <= 79
    let gradesD = grades >=60 && grades <= 69
    let gradesE = grades >60 && grades >= 0
    let nota
        if (gradesA) {
            nota = 'A'
        } else if (gradesB) {
            nota = 'B'
        } else if (gradesC) {
            nota = 'C'
        } else if (gradesD) {
            nota = 'D'
        } else if (gradesE) {
            nota = 'E'
        } else {
            nota = 'Nota inválida!'
        }

    return nota
}

console.log(getScore(85))
console.log(getScore(105))
console.log(getScore(-5))
console.log(getScore(12))
console.log(getScore(95))
console.log(getScore(75))
console.log(getScore(63))
console.log(getScore(66))
console.log(getScore(97))
console.log(getScore(-9))
