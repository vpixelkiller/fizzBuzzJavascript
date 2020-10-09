describe('fizzBuzz tests', ()=>{
it('Process a list from 1 to 100', ()=>{
    //arrange
    let actualNumber = 0
    let actualI = 0
    //act
    for (let i=1; i<=100; i++){
        actualNumber = i
        actualI = testFizzBuzz(i)
        // console.log(actualI)
    }
    //assert
    expect(actualNumber).toEqual(actualI)
})

it('a few numbers are multiple of three', ()=>{
    const evenNum = 18

    let isMultipleOfThree = testFizzBuzz(evenNum)

    expect(isMultipleOfThree).toEqual('fizz')
})

it('a few numbers are multiple of five', ()=>{
    const evenNum = 25

    let isMultipleOfFive = testFizzBuzz(evenNum)

    expect(isMultipleOfFive).toEqual('Buzz')
})

it('a few numbers are fizzBuzz', ()=>{
    const evenNum = 90

    let isFizzBuzz = testFizzBuzz(evenNum)

    expect(isFizzBuzz).toEqual('fizzBuzz')

})

it('Process fizzBuzz 1 to 100', ()=>{
    var testActualNumber = ""

    for (let i=1; i<=100; i++){
        let isFizzBuzz = testFizzBuzz(i)
        testActualNumber = isFizzBuzz
    }
    expect(typeof(testActualNumber)).toBe('string')
})



})