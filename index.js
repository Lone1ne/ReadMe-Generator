// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a breif description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "Choose a license for your project:",
    name: "license",
    choices: [
      "Apache",
      "Boost",
      "BSD3",
      "Eclipse",
      "GPLv3",
      "MIT",
      "Unlicense",
      "No license",
    ],
  },
  {
    type: "input",
    message: "Give instructions on how to install and set up the project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Give information on how to use the project",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Give guidelines on how to contribute to the project and any code of conduct if applicable",
    name: "contributions",
  },
  {
    type: "input",
    message:
      "Give information on how to run tests and any test cases provided in the project",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

inquirer.prompt(questions).then((answers) => {
  fs.writeFile("README.md", generateMarkdown(answers), (error) => {
    if (error) {
      console.log(error);
    }
  });
});
