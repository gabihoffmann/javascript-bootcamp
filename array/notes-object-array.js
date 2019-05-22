const notes = [ //open arry 
    {//open object
        title: 'My next trip',
        body: 'I would like to go Canada'
    },//close object

    {
        title: 'Habbits to work on',
        body: 'Drink more water'
    },
    
    {
    title: 'Office modification',
    body: 'Get a new display'
    }
] //close array

console.log(notes)
console.log(notes.length)

console.log(notes.indexOf({})) // retun -1 (error)

//compare two object
console.log({} == {})
// does not matter if they have the same set of object properties
// and the same object property values.
// they are diferents

const oneObject = {}
const otherObject  = oneObject
console.log(oneObject === otherObject)
// in this case is true because bolth pointed to the same memory local

// The findIndex method allows us to provide our own definition of what make two things equal
// 
const indexOfNote = notes.findIndex(function (note,index) {
    return note.title === 'Habbits to work on'
})
console.log(indexOfNote)


console.log('--------------------------')

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
        })
    return notes[index]
}

const haveNote = findNote(notes,'office modification')
console.log(haveNote)

const findNoteTwo = function (notes, noteTitle) {
    return notes.find(function (note){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const haveNoteTwo = findNoteTwo(notes, 'ofFice modification')
console.log(haveNoteTwo)