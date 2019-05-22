let varOne = "varOne"

if (true){
    console.log(varOne)
    let varTwo  = "varTwo"
    console.log(varTwo)

    if(true){
        let varFour = "varFour"
        console.log(varOne,varTwo,varFour)
    }
}

if (true){
    let varThree = "varThree"
    console.log(varOne,varThree)
}

//console.log(varTwo) //ReferenceError: varTwo is not defined