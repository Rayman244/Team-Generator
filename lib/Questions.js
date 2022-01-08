const startQ = {
    type: 'checkbox',
    name:'startQ',
    message:"choose an employee to add",
    choices: employeeChecker(employees)
}
const addMoreQ = {
    type: 'checkbox',
    name:'addMoreQ',
    message:"would you like to add another employee",
    choices: ['yes','no']
}
const addNewEmployee = {
    type: 'checkbox',
    name:'addNewEmployee',
    message:"would you like to add another employee",
    choices: ['yes','no']
}
const alikeQs = [  
    {
        type:'input',
        name:'employeeName',
        message:"Enter persons name",
        default:'Ray'
    },{
        type:'input',
        name:'employeeID',
        message:"Enter this persons employee ID",
        default:'1'

    },
    {
        type:'input',
        name:'employeeEmail',
        message:"Enter this persons email",
        default:'mail@mail.com'

    },]
const managerQs = [
   ...alikeQs,
   {
    type:'input',
    name:'officeNum',
    message:"Enter office number",
    default: '1'

},
   
   
    ]
const engineerQs = [
    ...alikeQs,
    {
        type:'input',
        name:'github',
        message:"Enter this persons GitHub username",
    },
]
const internQs = [
    ...alikeQs,{
        type:'input',
        name:'school',
        message:"Enter this persons school",
    },
]
    module.exports = {
        managerQs,
        engineerQs,
        internQs,
        startQ,
        addMoreQ
    }