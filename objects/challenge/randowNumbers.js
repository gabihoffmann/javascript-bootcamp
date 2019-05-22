let makeGuess = function(num){
    let min = 1
    let max = 5
    let randomNumber = Math.floor(Math.random() * (max - min +1)) + min

    return `${num === randomNumber} - Num: ${num} , Rand: ${randomNumber}` 
}


console.log(makeGuess(1))
console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(4))
console.log(makeGuess(5))

