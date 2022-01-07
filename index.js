const inquirer = require("inquirer");

const { managerQs, engineerQs, internQs } = require("./controller/Questions");

inquirer
  .prompt(managerQs)
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(`Prompt couldn't be rendered in the current environment`);
    } else {
      console.log(`Something else went wrong `,error);
    }
  });
 