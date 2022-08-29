const connection = require('./connection');

class Database {
    constructor (connection) {
        this.connection = connection
    }

    findAllEmployees() {
        return this.connection.promise().query(
           'SELECT * FROM employee'
        )
    }

    findAllDepartments() {
        return this.connection.promise().query(
           'SELECT * FROM department'
        )
  }
      
    findAllRoles() {
        return this.connection.promise().query(
           'SELECT * FROM role'
        )
    } 

    addDepartment(newDep) {
        return this.connection.promise().query(
            `INSERT INTO department (name)
            VALUES ('${newDep}')`,
         ) 
    }

    addEmployee(newEmp) {
        return this.connection.promise().query(
            `INSERT INTO employee (first_name)
            VALUES ('${newEmp}')`,
         ) 
    }

    addRole(newRole, newSal, newRoleId) {
        return this.connection.promise().query(
            `INSERT INTO role (title, salary, department_id)
            VALUES ('${newRole, newSal, newRoleId}')`,
         ) 
    }

    updateEmployee(upEmp) {
        return this.connection.promise().query(
            `UPDATE employee
            SET manager_id = ('${upEmp}')
            WHERE id = ${answer.id}`,
         ) 
    }

}

module.exports = new Database(connection)


