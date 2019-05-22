// grade calculator function
// students score, total possible score

// 15->20 you got a C - 75%

// A 90 - 100
// B 80 - 89
// C 70 - 79
// D 60 - 69
// F 0 - 59

let gradeCalculator = function(score, totalScore){

    let percentScore = (score/totalScore) * 100
    let letterGrade = ''

    if (percentScore <= 59){
       letterGrade = 'F'
    } else if (percentScore <= 69){
       letterGrade = 'D'
    } else if (percentScore <= 79){
       letterGrade = 'C'
    } else if (percentScore <= 89){
       letterGrade = 'B'
    }else{
       letterGrade = 'A'
    }

    return`With ${score} from a total score ${totalScore} you percentual are ${percentScore} so you got a ${letterGrade}`
}

let myScore =  gradeCalculator(9, 20);
console.log(myScore)


