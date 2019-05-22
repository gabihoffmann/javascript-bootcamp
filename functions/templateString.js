
console.log('This is a String whit single quotes')
console.log("This is a String whit double quotes")

let stringText =  'concatenation text'
console.log('this is a string with' + stringText)

// Template String

let name = 'Gabi'
console.log(`Hey my name is ${name}`)

let getTip = function (total, tipPercent = .2){
    let percent = tipPercent*100
    return `A ${percent}% tip on $${total} would be $${total*tipPercent}`
};

let tip = getTip(40,.25)
console.log(tip)