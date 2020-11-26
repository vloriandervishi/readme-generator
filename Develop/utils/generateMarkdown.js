// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Description: 
${data.description}

# Installation:
${data.installation}

# Usage:
${data.usage}

# Licence:
${data.license}

# Contributions:
${data.contributing}

# Tests:
${data.tests}

# GitUsername:
${data.GitUsername}

# Email:
${data.email}
`;
}

module.exports = generateMarkdown;
