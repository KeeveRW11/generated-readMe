// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// The function used to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution)
  * [Test](#test)
  * [License](#license)
  * [For More Details](#questions)
  ## Description
  ${data.description}
  ## Installation 
  ${data.instructions}
  ## Usage 
  ${data.usage}
  ## Contribution Guidelines
  ${data.contribution}
  ## Test
  ${data.test}
  ## License
  ${data.license}
  ## For More Details
  Contact me:
  Github:[${data.link}](https://github.com/KeeveRW11)
  Email:[${data.email}](keevewhyte+github@gmail.com)

`;
}

module.exports = generateMarkdown;
