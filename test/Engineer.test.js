// const {Engineer} = require('../lib/Engineer')
const {Engineer} = require('../lib/brain')


describe("Engineer", () => {const testEngineer = new Engineer('Ray',"1",'mail@mail.com','Rayman244');
  describe('getGithub', () => {
     it("should return the Engineers GitHub name", () => {
    const answer = 'Rayman244'
    expect(testEngineer.getGithub()).toEqual(answer);
   
    });
  })
  
    describe("getRole", () => {
      it("should eturn the Engineers ID.", () => {
        const  answer = 'Engineer' 
  
        expect(testEngineer.getRole()).toEqual(answer);
      });
    });
  
  });