// Arrays
const notes = ['Note 1','Note2','Note3']
console.log(notes)
// // array property
// console.log(notes.length)
// // access the index
// console.log(notes[0])
// console.log(notes[10]) // undefined
// console.log(notes[notes.length - 1]) // calculation

// // array methods
// notes.push('Note4') // add elements to the end
// console.log(notes)

// notes.pop() // remove the last item
// console.log(notes)

// notes.shift() //shift  the first item
// console.log(notes)

// notes.unshift('First Note') // add in the index 0
// console.log(notes)

notes.splice(1,1) // remove at the midle (index start, quantity to remove)
console.log(notes.length)
console.log(notes)

notes.splice(1, 0, 'new second item') // remove at the midle (index start, quantity to remove, introduce a new item )
console.log(notes.length)
console.log(notes)

notes[1] = 'Note 2 (old way)'
console.log(notes)

// access all array
// the forEach method provides callbacks
// the currentValue of the element, the index and the array object being traversed

notes.forEach(function (item, index) {
    console.log(`${index+1}: ${item} `)
})

// For Loop
for(let count = 0; count < notes.length; count++ ){
    console.log(`${count+1}: ${notes[count]} `)
}

for (let count = 2; count >= 0; count--){
    console.log(`${count}...`)
}

//count reverse
for (let count = notes.length-1; count >= 0 ; count--) {
    console.log(`${count + 1}: ${notes[count]} `)
}