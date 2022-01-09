const {Intern} = require('../lib/brain')
describe("Manager", () => {
    const testIntern = new Intern('Ray',"1",'mail@mail.com','Penn');
  describe('getSchool', () => {
     it("should return the Interns school name", () => {
    const answer = 'Penn'
    expect(testIntern.getSchool()).toEqual(answer);
   
    });
  })
  
    describe("getRole", () => {
      it("should return the Interns Role.", () => {
        const  answer = 'Intern' 
  
        expect(testIntern.getRole()).toEqual(answer);
      });
    });
  
  });