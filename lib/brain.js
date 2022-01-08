const employees = []
const employeeList= []
const cardList = []
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        
    }
    getname(){
        return this.name
    };
    getId(){
        return this.id
    };
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }

}

class Manager extends Employee{
    constructor(name, id, email,offNum){
        super(name,id,email);
        this.role = 'Manager'
        this.other = `Office Number: ${offNum}`
    }
    getRole(){
        return this.role
    }
}

class Engineer extends Employee {
    constructor(name, id, email,github){
        super(name,id,email);
        this.role = "Engineer"
        this.other = `GitHub: ${github}`
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return this.role
    }
}
class Intern extends Employee {
    constructor(name, id, email,school){
        super(name,id,email);
        this.role = 'Intern'
        this.other = `School: ${school}`
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}


module.exports = {
    Manager,
    Employee,
    Engineer,
    Intern,
    employees,
    employeeList,
    cardList
    
    
}