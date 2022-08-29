const inquirer = require('inquirer')
const database = require('./db')

const questions =    {
    type: 'list',
    name: 'bigList',
    message: 'What would you like to do?',
    choices: ['View all departments?', 'view all employees?', 'view all roles?', 'Add a department?', 'Add a employee', 'Add a role?', 'Update an employee?']
}

async function start() {
  while (true) {   
    var answer = await inquirer.prompt (questions)
    await userAnswer(answer)
  }
}

const userAnswer = async (answer) => {
    switch (answer.bigList) {
      case "View all departments?":
        var departments = await database.findAllDepartments()
        console.log(departments[0].map(department => department.name)) 
        break
  
      case "view all employees?":
        var employees = await database.findAllEmployees()
        console.log(employees[0].map(employee => employee.first_name))
        break
  
      case "view all roles?":
        var roles = await database.findAllRoles()
        console.log(roles[0].map(role => role.title))
        break
  
      case "Add a department?":
        var answer = await inquirer.prompt ( {
          type: 'input',
          message: 'What department would you like to add?',
          name: 'newDepartment'
        })
        console.log(answer)
        await database.addDepartment(answer.newDepartment)
        break

      case "Add a employee?":
        var answer = await inquirer.prompt ( {
          type: 'input',
          message: 'What is the name of the Employee you would like to add?',
          name: 'newEmployee'
        })
        console.log(answer)
        await database.addEmployee(answer.newEmployee)
        break

      case "Add a role?":
        var answer = await inquirer.prompt ( {
          type: 'input',
          message: 'What role would you like to add?',
          name: 'newRole'
        }, 
        {
          type: 'input',
          message: 'What is the salary of this role?',
          name: 'roleSal'
        },
        {
          type: 'input',
          message: 'what is the department id?',
          name: 'roleId'
        }  
        )
        console.log(answer)
        await database.addEmployee(answer.newRole, answer.roleSale, answer.roleId)
        break

      case "Update an employee?":
        updateEmployee()
        break
    }
  }

start();