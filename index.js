const inquirer = require("inquirer");
const {Manager,Intern,employeeList, Engineer,cardList} = require('./lib/brain')
const {startQ, managerQs, engineerQs, internQs,addMoreQs,addNewEmployeeQs } = require("./lib/Questions");
const {generateHtml,createCard,generateCss} = require('./lib/genHtml')
let fs = require('fs')

let prompt = inquirer.createPromptModule();


const start = () => {

prompt(startQ).then((answers) =>{
    addManager()
})
}
const addManager = () => {
prompt(managerQs).then((answers)=>{
    const{employeeName,employeeID,employeeEmail,other} = answers
    const managerObj = new Manager(employeeName,employeeID,employeeEmail,other)
    employeeList.push(managerObj)
    
    return addMore()
    
})
}
const addEngineer = () =>{
    prompt(engineerQs).then((answers)=>{
        const{employeeName,employeeID,employeeEmail,other} = answers
        const engineerObj = new Engineer(employeeName,employeeID,employeeEmail,other)
        employeeList.push(engineerObj)
    

        return addMore()
    })
}
const addIntern = () =>{
    prompt(internQs).then((answers)=>{
        const{employeeName,employeeID,employeeEmail,other} = answers
        const internObj = new Intern(employeeName,employeeID,employeeEmail,other)
        employeeList.push(internObj)
    

        return addMore()
    })
}
const addMore = () =>{
    prompt(addMoreQs).then((answers)=>{
        if(answers.addMoreQ === 'Yes'){
           return addNewEmployee() 
        }else{
            console.log('Finished');
            employeeList.map((emp)=>{
                const {name,id,email,role,other} = emp
                cardList.push(createCard(name,role,id,email,other))})
            fs.appendFile('index.html',generateHtml(cardList), (err) =>
            err
              ? console.error(`Error appending to file \n ${err}`)
              : console.log(
                  "Successfully created HTML file."
                )
          )
          fs.appendFile('styles.css',generateCss(), (err) =>
          err
            ? console.error(`Error appending to file \n ${err}`)
            : console.log(
                "Successfully created CSS file."
              )
        )
            
        }
        
        
    })
    
}
const addNewEmployee = ()=>{
    prompt(addNewEmployeeQs).then((answers)=>{
        // console.log(answers);
        switch(answers.addNewEmployeeQ){
            case 'Manager': addManager();
            break;
            case 'Engineer': addEngineer();
            break;
            case 'Intern': addIntern();
            break;
        }
        
    })
}

start()