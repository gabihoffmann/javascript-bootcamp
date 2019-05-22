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
    },

    {
        title: 'a text',
        body: 'texto'
    }
    ]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes, 'ofFice modification')
console.log(note)


// take notes in order using the method SORT
const sortNotes = function (notes) {

    notes.sort(function (a,b){
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(a.title.toLowerCase() > b.title.toLowerCase()){
            return  1
        } else{
            return 0
        }

    })

}

sortNotes(notes)
console.log(notes)