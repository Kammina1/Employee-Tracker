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
        // start()
  }
      
    findAllRoles() {
        return this.connection.promise().query(
           'SELECT * FROM role'
        )
    } 

    addDepartment() {
        return this.connection.promise().query(
            `INSERT INTO department (name)
            VALUES ('${answer.name}')`,
         ) 
    }

}

module.exports = new Database(connection)


