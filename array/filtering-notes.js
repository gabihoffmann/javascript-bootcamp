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


//method filter: create a new array with all elements that past the test
const findNotes = function(notes,query){
   return notes.filter(function (note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query)
        const isBodyMatch = note.body.toLowerCase().includes(query)
        return isTitleMatch || isBodyMatch

    })
}

console.log(findNotes(notes,'work'))