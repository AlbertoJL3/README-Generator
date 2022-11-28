const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your Project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please write a description for your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please write the usage information for your project.',
            name: 'usage',

        },
        {
            type: 'checkbox',
            message: 'What kind of license will you be using?',
            name: 'license',
            choices: ["MIT", "ISC", "Microsoft Public License"]
        },
        {
            type: 'input',
            message: 'Please write the contribution guidelines for your project.',
            name: 'contributing',

        },
        {
            type: 'input',
            message: 'Please write the test instrucitons for your project.',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Please write your gitub username',
            name: 'Github',
        },
        {
            type: 'input',
            message: 'Please write your email',
            name: 'email',
        },
    ])
    .then((response) =>
        appendToPage(response)
    );

//Creates README file
function appendToPage(data) {
    fs.writeFile(data.title + '.md', `
[![License: `+ data.license +`](https://img.shields.io/badge/License-`+ data.license +`-yellow.svg)](https://opensource.org/licenses/`+ data.license +`)
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#Questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
This project uses the following license: 
${data.license}
## Contributing
${data.contributing}
## Tests 
${data.tests}
## Questions
${data.questions}
Github information:
github.com/${data.Github}
Email: ${data.email}`,
        function (err) {
            if (err) throw err;
            console.log('Index.html Created!');
        });
}

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README


// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README