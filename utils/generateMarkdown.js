// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseBadges = {
  Apache:
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  Boost:
    "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  BSD3: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  Eclipse:
    "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  GPLv3:
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  Unlicense:
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "No license": "",
};
const licenseLink = {
  Apache: "(https://opensource.org/licenses/Apache-2.0)",
  Boost: "(https://www.boost.org/LICENSE_1_0.txt)",
  BSD3: "(https://opensource.org/licenses/BSD-3-Clause)",
  Eclipse: "(https://opensource.org/licenses/EPL-1.0)",
  GPLv3: "(https://www.gnu.org/licenses/gpl-3.0)",
  MIT: "(https://opensource.org/licenses/MIT)",
  Unlicense: "(http://unlicense.org/)",
  "No license": "",
};

function renderLicenseBadge(license) {
  return licenseBadges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No license") {
    return "";
  } else {
    return `## License
  This project is licensed under the ${license} license. Link to license: ${licenseLink[license]}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No license") {
    return "";
  } else {
    return renderLicenseLink(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `${renderLicenseBadge(answers.license)}
# ${answers.title}
## Description
 ${answers.description}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}
## Usage
${answers.usage}
${renderLicenseSection(answers.license)}
## Contributing
${answers.contributions}
## Tests
${answers.tests}
## Questions

Have questions? Contact me through GitHub here: https://github.com/${
    answers.github
  }.
Or email me here: ${answers.email}.
We look forward to hearing from you!`;
}

module.exports = generateMarkdown;
