var firstName = 'Gabi'
// reassign
firstName = 'Ana'

// redeclaring
var firstName = 'Iago'
console.log(firstName)


//scope
if (true){
    var name = 'gabi'
    //LOCAL SCOPE: secondName just exist here
    let secondName = 'hoffmann'
}
// var don't respect global/local scope
console.log(name)
// console.log(secondName) - ReferenceError