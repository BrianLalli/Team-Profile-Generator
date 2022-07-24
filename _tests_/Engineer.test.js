const Engineer = require('../lib/Engineer');

// create tests based on properties (1)
test("lets check github", () => {
    // initialize test value
    const testValue = "github";
     // actual test
     const newEngineer = new Engineer("John", "123", "blah.com", testValue);
    // conclusion
    expect(newEngineer.github).toBe(testValue)
})
// create tests based on methods (2)
test("lets check getRole", () => {
    // initialize test value
    const testValue = "Engineer";
    // actual test
    const newEngineer = new Engineer("John", "123", "blalli@yahoo.com", testValue)
    // conclusion
    expect(newEngineer.getRole()).toBe(testValue)
})

test("lets check getGithub", () => {
     // initialize test value
     const testValue = "github";
     // actual test
     const newEngineer = new Engineer("John", "123", "blalli@yahoo.com", testValue)
     // conclusion
     expect(newEngineer.getGithub()).toBe("github")
})