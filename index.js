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
// Four options: create Manager, Engineer, or Intern, or finish creating
// Each option needs to have a function
    // createManager();
        // ask for Manager info
            // name
            // id
            // email
            // officeNumber
                // use answers to create a new Manager object using Manager class
                    // store new Manager inside of an array
    // createEngineer();
    // createIntern();
// Create generate HTML function
    // creating HTML template
    // writing template into a file

