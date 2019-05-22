//DOM - Document Object Model
// DOM connects web pages to scripts by representing the structure of a document
// It represents the page so that programs can change the document structure, style, and content.


// document is an object provides by the browser
// querySelector return the first element with the document that math
// const p  = document.querySelector('p')
// p.remove()

// querySelectorAll return all elements
const ps = document.querySelectorAll('p')
ps.forEach(function (p){
    p.textContent = '*****'
    //console.log(p.textContent)
    //p.remove()

})