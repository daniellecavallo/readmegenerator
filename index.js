const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What license is your project under?',
      name: 'License',
      choices: ["MIT","CC","Unlicense"]
    },
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'How would you describe your project?',
      name: 'description',
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage',
     },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
     },
    {
        type: 'input',
        message: 'How do you contribute to this project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Who worked on this project?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Are there any tests for this project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is the creators email?',
        name: 'Email',
    },
  ])
  .then((response) => {
    const template=`
  # ${response.title} 

## Description
    ${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Contribution
${response.contribution}

## Test
${response.test}

## License
this project is governed under the ${response.license} license

## Question
this project was creted by ${response.credits}

they can be reached at ${response.email}
    `
  fs.writeFile('readme.md', template, (err) =>
  err ? console.error(err) : console.log('Success!')
  );
});