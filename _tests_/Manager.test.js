const Manager = require('../lib/Manager');

// create test based on properties (1)
test ("lets check officeNumber", () => {
    // initialize test value
    const testValue = "737";
    // actual test
    const newManager = new Manager("John", "123", "blalli@yahoo.com", testValue);
    // conclusion
    expect(newManager.officeNumber).toBe(testValue);
})

// create test based on method (1)
test("lets check getRole", () => {
    // initialize test value
    const testValue = "Manager";
    // actual test
    const newManager = new Manager("John", "123", "blalli@yahoo.com", testValue)
    // conclusion
    expect(newManager.getRole()).toBe(testValue)
})