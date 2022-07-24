const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./lib/generateHTML');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

let responses = [];

//engineer question array
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },

]

//intern question array
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school did you attend?'
    },

]

//manager question array
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is your office number?'
    },

]

// Create a main function to ask user what they will want to do
const chooseNext = [{
    type: 'list',
    name: 'choice',
    message: 'Choose who to add next.',
    // Four options: create Manager, Engineer, or Intern, or finish creating
    choices: ['Engineer', 'Intern', 'Finished Creating']
}]

// Each option needs to have a function
   // ask for Manager info
const init = () => {
    inquirer.prompt(managerQuestions)
    .then(answers => {
    // use answers to create a new Manager object using Manager class
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
      responses.push(manager);
      console.log(responses);
      //push to team array (manager parameter)
      //call function to create new team member
      nextPerson();
    })
  }
  
  const chooseNext = () => {
    inquirer.prompt(chooseNext)
    .then(answers => {
      //choice = engineer, run engineer function
      if(answers.choice === 'Engineer'){
        makeEngineer();
      } else if (answers.choice === 'Intern') {
        makeIntern();
      } else {
        generateHTML(responses);
      }
    })
  }
// createEngineer();
  const makeEngineer = () => {
    inquirer.prompt(engineerQuestions)
    .then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      responses.push(engineer);
      console.log(responses);
      //push to team array (engineer parameter)
      //call function to create new team member
      chooseNext();
    })
  }
  
// createIntern();
  const makeIntern= () => {
    inquirer.prompt(internQuestions)
    .then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      responses.push(intern);
      console.log(responses);
      //push to team array (engineer parameter)
      //call function to create new team member
      chooseNext();
    })
  }
    
     

// Create generate HTML function
    // creating HTML template
    // writing template into a file

