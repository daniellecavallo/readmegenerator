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
      name: 'Title',
    },
    {
      type: 'input',
      message: 'How would you describe your project?',
      name: 'Description',
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'Usage',
      },
  ])
  .then((response) => {
    const template=`
    <svg height="500" width="500">
    ${shape.render()}
    <text x="0" y="15" fill="${response.textcolor}">${response.text}</text>
  </svg>`
  fs.writeFile('logo.svg', template, (err) =>
  err ? console.error(err) : console.log('Success!')
  );
});