const Employee = require('./Employee');

class Engineer 
extends Employee {
    constructor(name, id, email, github){
        // this.name = name;
        // this.id = id;
        // this.email = email;
        // in order to pass previous properties from constructor we need to use super
        super(name, id, email);
        this.github = github;
    };
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
};
// const Manager1 = new Manager("name", "id", "email", "github")
//     console.log(Manager1);

module.exports = Engineer;
