const Employee = require('./Employee')
class Manager extends Employee{
    constructor(name, id, email,offNum){
        super(name,id,email);
        this.role = 'Manager'
        this.other = `Office Number: ${offNum}`
        this.offNum = offNum
    }
    getOffNum(){
        return this.offNum
    }
    getRole(){
        return this.role
    }
}
const test = new Manager('Ray','1','mail@mail.com','001')
console.log(test.getOffNum());
module.exports = {
    Manager
}