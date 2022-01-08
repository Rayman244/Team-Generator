const Employee = require('../lib/brain')
describe("Employee", () => {
    describe("getName", () => {
      it("should return a new reversed version of the string", () => {
        const testString = "Hello World!" 
        const answer = '!dlroW olleH'
        const obj = new Algo(testString);
        expect(obj.reverse(testString)).toEqual(answer);
      });
    });
  
    describe("isPalindrome", () => {
      it("should eturn the boolean `true` if the provided string is a palindrome.", () => {
        const testWord = `racecar`
        const obj = new Algo(testWord);
  
        expect(obj.isPalindrome(testWord)).toEqual(true);
      });
    });
  
    describe("capitalize", () => {
       it("should return a new string with the first letter of each word capitalized ", () => {
        const testString = "hello world!"
        const answer = "Hello World!"
        const obj = new Algo(testString);
        expect(obj.capitalize(testString)).toEqual(answer);
      });
    });
  });
 