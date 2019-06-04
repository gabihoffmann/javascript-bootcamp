
//DOM - Document Object Model
// DOM connects web pages to scripts by representing the structure of a document
// It represents the page so that programs can change the document structure, style, and content.

// document is an object provides by the browser
// querySelector return the first element with the document that math
// const p  = document.querySelector('p')
// p.remove()
//document.querySelector('p').remove();
// querySelectorAll return all elements
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p){
//     p.textContent = '*****'
//     //console.log(p.textContent)
//     //p.remove()
// })
// // add a new  element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)

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

//create an object that receives the search text of eventListener input
const filters = {
    searchText : ''
}

// render the research
const renderNotes = function (notes, filters){
    // .filters() : function of array function that returns a array with the elements that passed the test
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes-app').innerHTML = ''
    
    filteredNotes.forEach(function (note){
        const newParagraph = document.createElement('p')
        newParagraph.textContent = `${note.title}: ${note.body}`
        document.querySelector('#notes-app').appendChild(newParagraph)

    })
}

renderNotes(notes,filters)

//Handling user interaction
// Use the attribute ID of element: method - getElementById('String')
//                   : method - querySelector('#String')
document.getElementById('create-note').addEventListener('click',function (e) {
    //console.log('Did this work??')
    //console.log(e)
    e.target.textContent = 'The button was clicked' 
})

document.querySelector('#remove-all').addEventListener('click',function (e) {
    console.log('Delete all notes')
    document.querySelectorAll('.my-notes').forEach(function (note) {
        note.remove()
    })  

});

document.querySelector('#search-notes').addEventListener('input',function (e) {
    //console.log(e.target.value)
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

