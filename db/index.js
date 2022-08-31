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

    getRoleByTitle(title) {
        return this.connection.promise().query(
            `SELECT * FROM role WHERE title = '${title}'`
         )
    }

    async addEmployee(newFirst, newLast, newPos, newMang) {
        var roleId= await this.getRoleByTitle(newPos)
        return this.connection.promise().query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ('${newFirst}', '${newLast}', ${roleId[0][0].id}, ${newMang})`,
         ) 
    }

    addRole(newRole, newSal, newRoleId) {
        console.log(newRole, newSal, newRoleId)
        return this.connection.promise().query(
            `INSERT INTO role (title, salary, department_id)
            VALUES ('${newRole}', ${newSal}, ${newRoleId})`,
         ) 
    }

    async updateEmployee(upEmp, upRole) {
        
        var roleId = await this.getRoleByTitle(upRole)
        return this.connection.promise().query(
            `UPDATE employee
            SET role_id = ('${roleId[0][0].id}')
            WHERE id = ${upEmp}`,
         ) 
    }

}

module.exports = new Database(connection)


