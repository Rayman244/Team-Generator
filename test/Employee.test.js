const {Employee} = require('../lib/Employee')
const testEmployee = new Employee('Ray',"1",'mail@mail.com');

describe("Employee", () => {
  describe('getName', () => {
     it("should return the employees name", () => {
    const answer = 'Ray'
    expect(testEmployee.getName()).toEqual(answer);
   
    });
  })
  
 
  
    describe("getId", () => {
      it("should eturn the employees ID.", () => {
        const  answer = '1' 
  
        expect(testEmployee.getId()).toEqual(answer);
      });
    });
  
    describe("getEmail", () => {
       it("should return the employees email", () => {
        const answer = "mail@mail.com"
        expect(testEmployee.getEmail()).toEqual(answer);
      });
    });
  });
 