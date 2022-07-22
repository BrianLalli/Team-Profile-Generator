const Employee = require('../lib/Employee');

// create tests based on properties (3)

test("lets check name", () => {
    // initialize test value
    const testValue = "John";
    // actual test
    const newEmployee = new Employee(testValue, "123", "blah.com");
    // conclusion
    expect(newEmployee.name).toBe(testValue)
})

test("lets check ID", () => {
    // initialize test value
    const testValue = "1234";
    // actual test
    const newEmployee = new Employee("John", testValue, "blah.com");
    // conclusion
    expect(newEmployee.id).toBe(testValue)
})

test("lets check email", () => {
    // initialize test value
    const testValue = "blah.com";
    // actual test
    const newEmployee = new Employee("John", "123", testValue);
    // conclusion
    expect(newEmployee.email).toBe(testValue)
})


// create tests based on methods (4)
test("lets check getName", () => {
    // initialize test value
    const testValue = "John";
    // actual test
    const newEmployee = new Employee(testValue, "123", "blah.com");
    // conclusion
    expect(newEmployee.getName()).toBe(testValue)
})

test("lets check getID", () => {
    // initialize test value
    const testValue = "123";
    // actual test
    const newEmployee = new Employee("John", testValue, "blah.com");
    // conclusion
    expect(newEmployee.getID()).toBe(testValue)
})

test("lets check getEmail", () => {
    // initialize test value
    const testValue = "blah.com";
    // actual test
    const newEmployee = new Employee("John", "123", testValue);
    // conclusion
    expect(newEmployee.getEmail()).toBe(testValue);
})

test("lets check getRole", () => {
    // actual test
    const newEmployee = new Employee("John", "123", "blah.com");
    // conclusion
    expect(newEmployee.getRole()).toBe("Employee");
})
