const startQ = {
    type:'input',
    name:'startQ',
    message:"Start by adding a manager press <enter> to continue",
    default: 'true'
}
const alikeQs = [  
    {
        type:'input',
        name:'employeeName',
        message:"Enter persons name",
    },{
        type:'input',
        name:'employeeID',
        message:"Enter this persons employee ID",
    },
    {
        type:'input',
        name:'employeeEmail',
        message:"Enter this persons email",
    },]
const managerQs = [
   ...alikeQs,
   {
    type:'input',
    name:'officeNum',
    message:"Enter office number",
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
        internQs
    }