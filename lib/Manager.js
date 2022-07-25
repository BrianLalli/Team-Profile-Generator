const Employee = require('./Employee');

class Manager 
extends Employee {
    constructor(name, id, email, officeNumber){
        // this.name = name;
        // this.id = id;
        // this.email = email;
        // in order to pass previous properties from constructor we need to use super
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber
    }
};
// const Manager1 = new Manager("name", "id", "email", "officeNumber")
//     console.log(Manager1);

module.exports = Manager;
