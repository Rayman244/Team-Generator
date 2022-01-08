const inquirer = require("inquirer");
const {Manager,Intern,employeeList, Engineer} = require('./lib/brain')
const {startQ, managerQs, engineerQs, internQs,addMoreQ } = require("./lib/Questions");

let prompt = inquirer.createPromptModule();


const start = () => {

prompt(startQ).then((answers) =>{
    console.log(answers);
    addManager()
})
}
const addManager = () => {
prompt(managerQs).then((answers)=>{
    const{employeeName,employeeID,employeeEmail,officeNum} = answers
    const managerObj = new Manager(employeeName,employeeID,employeeEmail,officeNum)
    employeeList.push(managerObj)
    console.log(employeeList);
    return addMore()
    
})
}
const addEngineer = () =>{
    prompt(engineerQs).then((answers)=>{
        const{employeeName,employeeID,employeeEmail,github} = answers
        const engineerObj = new Engineer(employeeName,employeeID,employeeEmail,github)
        employeeList.push(engineerObj)
    console.log(employeeList);

        return addMore()
    })
}
const addIntern = () =>{
    prompt(internQs).then((answers)=>{
        const{employeeName,employeeID,employeeEmail,school} = answers
        const internObj = new Intern(employeeName,employeeID,employeeEmail,school)
        employeeList.push(internObj)
    console.log(employeeList);

        return addMore()
    })
}
const addMore = () =>{
    prompt(addMoreQ).then((answers)=>{
        return start()
        
    })
}

start()