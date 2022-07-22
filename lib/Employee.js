class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return ("Employee");
    }
}
// const Employee1 = new Employee("Brian", "0123", "blalli@yahoo.com");
//     console.log(Employee1.getName());

// const Employee2 = new Employee("Jim", "0124", "blally@yahoo.com");
//     console.log(Employee2.getRole());

module.exports = Employee;