let name, age, stars, isSubscribed
name = 'Alisson'
age = 18
stars = 19.5
isSubscribed = false

let student = {
    name: 'Alisson',
    age: 18,
    weight: 70.5,
    isSubscribed: false
}

console.log(student)

console.log(`${student.name} de idade ${age} pesa ${student.weight}`)

let students = []
students = [
    student
]
console.log(students)
console.log(students[0])

const Beatriz = {
    name: 'beatriz',
    age: 19,
    weight: 55.5,
    isSubscribed: true
}

students[1] = Beatriz

console.log(students[1])