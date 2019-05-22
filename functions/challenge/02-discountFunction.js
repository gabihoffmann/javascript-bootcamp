
let discount = function (total , tipPercent = .2) {

    return "Your discount: " + total*tipPercent

};

let myDiscountOne = discount(100, .1);
let myDiscountTwo = discount(100, .50);
let myDiscountThree = discount(100);

console.log(myDiscountOne);
console.log(myDiscountTwo);
console.log(myDiscountThree);