// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the name of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please describe your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please enter test instruction:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose the license for this project:',
    choices: ['None','Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'WTFPL', 'The zlib/libpng License'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  }];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('./Generated README/README.md', generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log('README.md has been created');
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
    .then((data) => {writeToFile(data)})
    
 
}

// Function call to initialize app
init();



