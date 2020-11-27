// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightred)
<br />
This application is covered by the ${data.license} license. 
# Description: 
${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# Installation:
${data.installation}

# Usage:
${data.usage}

# Licence:
![badge](https://img.shields.io/badge/license-${data.license}-brightred)
<br />
This application is covered by the ${data.license} license. 

# Contributions:
${data.contributing}

# Tests:
${data.tests}

# Questions:
${data.questions}

# GitUsername:
${data.GitUsername}

# Email:
${data.email}
`;
}

module.exports = generateMarkdown;
