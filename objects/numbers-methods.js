let num = 103.941
// number methods
console.log(num)
console.log(num.toFixed(2))

//math methods
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// [0, 1) {0 included, but not 1}
// 0 - .9999999
let randomNum = Math.random()
console.log(randomNum)
console.log('------------------')
// random between 10 and 20
let min = 10
let max = 20
// 0 - 9.999999999
let randomNumTwo = (Math.random() * (max - min))
console.log(randomNumTwo)
// 0 - 10.99999999
randomNumTwo = (Math.random() * (max - min + 1))
console.log(randomNumTwo)
//0 - 10
randomNumTwo = Math.floor(Math.random() * (max - min + 1))
console.log(randomNumTwo)
// 10 - 20
randomNumTwo = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumTwo)

