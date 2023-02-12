// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
license.license === 'None' ? "" : renderLicenseLink()

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  [Description](#description)<br>
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [Credits](#credits)<br>
  [License](#license)<br>
  [Contributing](#contributing)<br>
  [Tests](#tests)<br>
  [Questions](#questions)<br>
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  Visit my GitHub profile page: https://github.com/${data.username}<br>
  If you have additional questions, please send an email to ${data.email}
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
}
