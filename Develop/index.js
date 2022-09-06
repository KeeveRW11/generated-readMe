//console.log('node is on');
// Packages required for this application
const fs = require('fs');
const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = () => {
    return inquirer.prompt(
    [
        {
            type: 'input',
            name: 'project',
            message: 'What is the title of your project? ()Required',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter the title of the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. ()Required',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter the description of the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please provide installation instructions. ()Required',
            validate: instructionsInput => {
                if (instructionsInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information. ()Required',
            validate: informationInput => {
                if (informationInput) {
                    return true;
                } else {
                    console.log('Please enter the usage information for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide information about contribution guidelines. ()Required',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter the contribution guidelines for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions for readers to follow. ()Required',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions for this project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use to complete your project?',
            choices:[
                "MIT",
                "APACHE 2.0",
                "artistic-2.0",
                "bsl-1.0",
                "Unlicense"]          
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                  return true;
                } else {
                  console.log('You need to enter a project GitHub link!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email for others to contact you about your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                  return true;
                } else {
                  console.log('You need to enter a project GitHub link!');
                  return false;
                }
            }
        }
    // Function used to write README file    
    ]).then(answers => {
        writeToFile(answers)
        console.log('Successfully wrote to README.md!')
    }).catch((err) => console.error(err));

};

// The function used to initialize app
const writeToFile = answers => {
    writeFile('README.md', generateMarkdown(answers))
}

// Function call used to initialize app
questions();
