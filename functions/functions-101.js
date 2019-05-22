let greetUser = function(){
    console.log("Welcome user!")
}

greetUser();

let square = function(num){
    let result = num * num
    return result
}

let value = square(3)
console.log(value)

let otherValue = square(10)
console.log(otherValue)

let anotherValue = square("5")
console.log(anotherValue)

let tryAgain = square("a")
console.log(tryAgain)


