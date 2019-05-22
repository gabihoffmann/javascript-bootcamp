
let convertCelsius = function (tempF) {
    let celsius = (tempF - 32) * 5/9
    return celsius
}

let celsius1  = convertCelsius(32)
let celsius2 = convertCelsius(68)

console.log(celsius1)
console.log(celsius2)