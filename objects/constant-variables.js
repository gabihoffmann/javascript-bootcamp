let isRaining = true
console.log(isRaining)
//reassign the variable
isRaining = false
console.log(isRaining)


const newRaining = true
console.log(newRaining)
// TypeError: Assignment to constant variable.
// We can't reassign a CONST variable
//newRaining = false
//console.log(newRaining)

// const object
const person = {
    age: 27
}
//SyntaxError: Identifier 'person' has already been declared
//const person = {name: 'jao'}

person.age = 28
console.log(person)