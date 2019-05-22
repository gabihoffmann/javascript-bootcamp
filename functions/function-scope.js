// Global scope (function convertCelsius, celsius1 , celsius2)
    // Local scope (tempF, celsius)
        // Local scope (isFreezing)

let convertCelsius = function (tempF) {
    let celsius = (tempF - 32) * 5/9

    if (celsius <= 0){
        let isFreezing = true
    }
    return celsius
}

let celsius1  = convertCelsius(32)
let celsius2 = convertCelsius(68)

console.log(celsius1)
console.log(celsius2)

// console.log(celsius) // celsius is not defined
