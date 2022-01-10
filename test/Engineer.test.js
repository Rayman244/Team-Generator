const Engineer = require('../lib/Engineer')
// const Engineer = require('../lib/brain')


describe("Engineer", () => {
  
  describe('getGithub', () => {
     it("should return the Engineers GitHub name", () => {
    const testEngineer = new Engineer('Ray',"1",'mail@mail.com','Rayman244');
    const answer = 'Rayman244'
    expect(testEngineer.getGithub()).toEqual(answer);
   
    });
  })
  
    describe("getRole", () => {
      it("should eturn the Engineers ID.", () => {
    const testEngineer = new Engineer('Ray',"1",'mail@mail.com','Rayman244');
        const  answer = 'Engineer' 
  
        expect(testEngineer.getRole()).toEqual(answer);
      });
    });
  
  });