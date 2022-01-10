const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name, id, email,github){
        super(name,id,email);
        this.role = "Engineer"
        this.other = `GitHub: <a href="https://github.com/${github} target='_blank">${github}</a>`
        this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return this.role
    }
}
module.exports = Engineer
