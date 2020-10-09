
// function testNumber(number){
//     return number
// }

function testFizzBuzz(evenNum){
    var fizzBuzzResult = ''

    if (evenNum % 3 === 0){
        fizzBuzzResult = fizzBuzzResult.concat('fizz')
    }
    if (evenNum % 5 === 0){
        fizzBuzzResult = fizzBuzzResult.concat('Buzz')
    }
    if (fizzBuzzResult === ""){fizzBuzzResult = evenNum.toString()}
    console.log(fizzBuzzResult)
    return fizzBuzzResult

}