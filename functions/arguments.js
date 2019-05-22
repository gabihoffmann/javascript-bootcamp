// Multiple arguments
let  add = function (a,b,c) {
    return a + b + c
};

let result = add(10,1, 2);
console.log(result);

// Default arguments

let getScoreText = function (name = "Anonymous", score = 0) {
    return "Name: " + name + " - Score: " + score
};

let resultOne = getScoreText();
let resultTwo = getScoreText("Gabi", 100)
console.log(resultOne)
console.log(resultTwo)

