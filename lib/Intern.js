const Employee = require('./Employee');

class Intern
extends Employee {
    constructor(name, id, email, school){
        // this.name = name;
        // this.id = id;
        // this.email = email;
        // in order to pass previous properties from constructor we need to use super
        super(name, id, email);
        this.school = school;
    };
    getRole(){
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
};
// const Manager1 = new Manager("name", "id", "email", "school")
//     console.log(Manager1);

module.exports = Intern;
