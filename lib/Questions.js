const startQ = {
    type: 'list',
    name:'startQ',
    message:"choose an employee to add",
    choices: ['Manager']
}
const addMoreQs = {
    type: 'list',
    name:'addMoreQ',
    message:"would you like to add another employee",
    choices: ['Yes','No']
}
const addNewEmployeeQs = {
    type: 'list',
    name:'addNewEmployeeQ',
    message:"What kind of employee do you want to add?",
    choices: ['Manager','Engineer','Intern']
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
    name:'other',
    message:"Enter office number",
    default: '1'

},
   
   
    ]
const engineerQs = [
    ...alikeQs,
    {
        type:'input',
        name:'other',
        message:"Enter this persons GitHub username",
    },
]
const internQs = [
    ...alikeQs,{
        type:'input',
        name:'other',
        message:"Enter this persons school",
    },
]
    module.exports = {
        managerQs,
        engineerQs,
        internQs,
        startQ,
        addMoreQs,
        addNewEmployeeQs
    }