// Undefined for variable

//create a variable without assigned a value
let name

if (name === undefined){
    console.log("Please provide a name")
} else {
    console.log("variable: "+name)
    // undefined: in JS is used to represent the absence of a value
}

// Undefined for function arguments

// Undefined as function return default value
let square = function(num){
    console.log("Argument: "+ num) //undefined - the arguments are set for default if they're not passed in when called
}

let result = square()
console.log("Function return: "+result) // undefined - default return value

// Null as assined value

let age = 27
age = null //"clean" the variable value as null
console.log("Clean a variable: "+age)