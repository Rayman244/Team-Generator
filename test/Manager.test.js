const Manager = require('../lib/Manager')
describe("Manager", () => {
    
  describe(' getOffNum', () => {
     it("should return the Managers officeNumber", () => {
      const testManager = new Manager('Ray',"1",'mail@mail.com','001');
    const answer = '001'
    expect(testManager.getOffNum()).toEqual(answer);
   
    });
  })
  
    describe("getRole", () => {
      it("should eturn the Employee's role.", () => {
        const testManager = new Manager('Ray',"1",'mail@mail.com','001');
        const  answer = 'Manager' 
  
        expect(testManager.getRole()).toEqual(answer);
      });
    });
  
  });