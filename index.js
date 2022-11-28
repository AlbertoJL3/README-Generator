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
            type: 'input',
            message: 'Please write the installation information for your project.',
            name: 'installation',

        },
        {
            type: 'list',
            message: 'What kind of license will you be using?',
            name: 'license',
            default: "MIT",
            choices: [
                {
                    name: "MIT",
                    value: "MIT",
                    value2: "MIT",
                    value3: "MIT"
                },
                {
                    name: "ISC",
                    value: "ISC",
                    value2: "ISC",
                    value3: "ISC"

                },
                {
                    name: "Microsoft Public License",
                    value: "Microsoft_Public_License",
                    value2: "Microsoft_Public_License",
                    value3: "Microsoft-Public-License",
                },
            ],
        },
        {
            type: 'input',
            message: 'Please write the contribution guidelines for your project.',
            name: 'contributing',

        },
        {
            type: 'input',
            message: 'Please write the test instructions for your project.',
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
    NOTE: This project uses the ${data.license} license!
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
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
${data.test}
## Questions
Here is some contact information to find me: 

[Github](https://www.github.com/${data.Github})

Email: ${data.email}`,
        function (err) {
            if (err) throw err;
            console.log('Index.html Created!');
        });
}
