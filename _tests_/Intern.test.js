const Intern = require('../lib/Intern');

// create tests based on properties (1)
test ("lets check school", () => {
    // initialize test value
    const testValue = "school";
     // actual test
    const newIntern = new Intern("John", "123", "blalli@yahoo.com", testValue)
    // conclusion
    expect(newIntern.school).toBe(testValue)
})

// create tests based on methods (2)
test("lets check getRole", () => {
    // initialize test value
    const testValue = "Intern";
    // actual test
    const newIntern = new Intern("John", "123", "blalli@yahoo.com", testValue)
    // conclusion
    expect(newIntern.getRole()).toBe(testValue)
})

test("lets check getSchool", () => {
    // initialize test value
    const testValue = this.school;
    // actual test
    const newIntern = new Intern("John", "123", "blalli@yahoo.com", testValue)
    // conclusion
    expect(newIntern.getSchool()).toBe(testValue)
})