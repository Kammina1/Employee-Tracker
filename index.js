const inquirer = require('inquirer')
const { findAllDepartments } = require('./db')
const database = require('./db')

// database.findAllEmployees().then(tracker => {
//     console.log(tracker)
//     promptUser(tracker[0])
// }) 

// database.findAllDepartments().then(tracker => {  
//     console.log(tracker[0].map(department => ({ Dapartment: department.name, value: department.id })))  
//     prompUser(tracker[0])
// }) 

// const employeeList = () => {
//     {
//         type: 'list',
//         name: 'employee-list',
//         message: 'Which employee would you like to select?',
//         choices: employeesList.map(employee => ({ name: employee.first_name, value: employee.id}))
//     }
// }

const questions =    {
    type: 'list',
    name: 'bigList',
    message: 'What would you like to do?',
    choices: ['View all departments?', 'view all employees?', 'view all roles?', 'Add a department?', 'Add a employee', 'Add a role?', 'Update an employee?']
}

async function start() {
    return await inquirer.prompt (questions)
    .then ((answer) => {
       userAnswer(answer)
       console.log(answer) 
    })
    .catch((err) => {
        console.log(err)
    })
}

const userAnswer = (answer) => {
    switch (answer.bigList) {
      case "View all departments?":
        findAllDepartments()
        break
  
      case "view all employees?":
        findAllEmployees()
        break
  
      case "view all roles?":
        findAllRoles()
        break
  
      case "Add a department?":
        addDepartment()
        break

      case "Add a employee?":
        addEmployee()
        break

      case "Add a role?":
        addRole()
        break

      case "Update an employee?":
        updateEmployee()
        break
    }
  }

start();