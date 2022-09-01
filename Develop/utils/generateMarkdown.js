// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg"; 
    case "APACHE 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "artistic-2.0":
      return "https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg"; 
    case "bsl-1.0":
      return "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
    case "Unlicense":
      return "https://img.shields.io/badge/license-Unlicense-blue.svg";
    default:
      return "";
  }    
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT"; 
    case "APACHE 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "artistic-2.0":
      return "https://opensource.org/licenses/Artistic-2.0"; 
    case "bsl-1.0":
      return "https://opensource.org/licenses/Bsl-1.0";
    case "Unlicense":
      return "http://unlicense.org/";
    default:
      return "";
  }   

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licensed) {
    return `The project is licensed under the ${license}`
  } else {
    return ``
  }
}

// The function used to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.project}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution)
  * [Test](#test)
  * [License](#license)
  * [For More Details](#questions)
  ## Description
  ${answers.description}
  ## Installation 
  ${answers.instructions}
  ## Usage 
  ${answers.usage}
  ## Contribution Guidelines
  ${answers.contribution}
  ## Test
  ${answers.test}
  ## License
  ${answers.license}
  ## For More Details
  Contact me:
  Github:[${answers.link}](https://github.com/KeeveRW11)
  Email:[${answers.email}](keevewhyte+github@gmail.com)

`;
}
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection;
module.exports = generateMarkdown;
