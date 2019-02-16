// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our 'fizzBuzzer' function
describe('fizzBuzzer', function() {
    
    it('should return fizz-buzz if numbers are divisble by 15', function () {
        const caseOne = [15, 30, 90];
        const expectedOne = 'fizz-buzz'
        caseOne.forEach(function(input) {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(expectedOne)
        })
    })

    it('should return buzz if numbers are divisble by 5', function () {
        const caseTwo = [5, 10, 25 ];
        const expectedTwo = 'buzz'
        caseTwo.forEach(function(input) {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(expectedTwo)
        })
    })
    it('should return fizz if numbers are divisble by 3', function () {
        const caseThree = [9, 27, 6]
        const expectedThree = 'fizz'
        caseThree.forEach(function(input) {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(expectedThree)
        })
    })
    it('should raise error if args not numbers', function() {
        // range of bad inputs where not both are numbers
        const badInputs = [
          function() {},'cat',false, true,[1,2,3]
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
          expect(function() {
            fizzBuzzer(input);
          }).to.throw(Error);
        });
      });
})

