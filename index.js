import inquirer from "inquirer";
import { questions } from "./Questions/questions.js";

import operations from "./Operations/operations.js";

inquirer
  .prompt(questions)
  .then((ans)=>{
    operations(ans)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

