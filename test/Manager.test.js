const {Manager} = require('../lib/brain')
describe("Manager", () => {
    const testManager = new Manager('Ray',"1",'mail@mail.com','001');
  describe(' getOffNum', () => {
     it("should return the Managers officeNumber", () => {
    const answer = '001'
    expect(testManager.getOffNum()).toEqual(answer);
   
    });
  })
  
    describe("getRole", () => {
      it("should eturn the Employee's role.", () => {
        const  answer = 'Manager' 
  
        expect(testManager.getRole()).toEqual(answer);
      });
    });
  
  });