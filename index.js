const inquirer = require('inquirer')
const database = require('./db')

database.findAllEmployees().then(employees => {
    console.log(employees[0].map(employee => ({ name: employee.first_name, value: employee.id})))
    
    prompUser(employees[0])
}) 
    
const prompUser = (employeesList) => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee-list',
            message: 'Which employee would you like to select?',
            choices: employeesList.map(employee => ({ name: employee.first_name, value: employee.id}))
        },
    ])
}
