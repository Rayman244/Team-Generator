const employees = []
const employeeList= []
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
        this.officeNumber = offNum
    }
    getRole(){
        return 'Manager'
    }
}

class Engineer extends Employee {
    constructor(name, id, email,github){
        super(name,id,email);
        this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}
class Intern extends Employee {
    constructor(name, id, email,school){
        super(name,id,email);
        this.school = school
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
    
    
}