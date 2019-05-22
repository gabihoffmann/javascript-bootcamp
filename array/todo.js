const toDo = ['ToDo 1', 'ToDo 2', 'ToDo 3', 'ToDo 4', 'ToDo 5']
console.log(`You have ${toDo.length} todos!`)

//first todo
console.log(`First todo: ${toDo[0]}`)
//second to last
console.log(`Second last: ${toDo[toDo.length - 2]}`)

//remove the 3rd item
console.log(toDo.splice(2,1))
console.log(toDo)
// add a new item onto the end
toDo.push('new item to the end')
console.log(toDo)
// remove the first item from the list
toDo.splice(0,1)
//toDo.shift()
console.log(toDo)

//
console.log(`You have ${toDo.length} `)
toDo.forEach(function (item,index,array) {
    console.log(`${index+1}. ${item}`) 
})

for (let index = 0; index < toDo.length; index++) {
    console.log(`${index + 1}. ${toDo[index]}`) 
}

//return the index returns the first index at which 
//a given element can be found in the array
//or -1 if it is not present.
console.log(toDo.indexOf('ToDo 2'))
console.log(toDo.indexOf('to do 1'))