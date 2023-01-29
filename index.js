import inquirer from "inquirer";
import answers from "./Answers/answers.js";
import { questions } from "./Questions/questions.js";

console.log("******************************")
console.log("Welcome to Banking Application")

console.log("******************************")
inquirer
  .prompt(questions)
  .then((ans)=>{
    answers(ans)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error)
    } else {
      // Something else went wrong
    }
  });

  

