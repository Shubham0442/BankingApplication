
import inquirer from "inquirer";
import { questions } from "./Questions/questions.js";

inquirer
.prompt(questions) 

  .then((answers) => {
    // Use user feedback for... whatever!!
    //console.log(answers)

    if(answers.ops === "CREATE" && answers.Confirm)
    {  
       const command = answers.command.split(" ")
       //console.log(command[0])

            if(command[0] === "CREATE")
            {      
                    let allAccounts = []
                    const file = fs.readFileSync("./db.json", { encoding: "utf-8" })
                    const parsedFile = JSON.parse(file)
                    // console.log(parsedFile)

                    let payload = {
                        account_no : command[1],
                        account_name : command[2],
                        balance : 0
                    }
                
                      let Accounts = [
                        ...allAccounts,
                        payload
                      ] 
                      //console.log(Accounts)
                      parsedFile.data = Accounts
                      
                      //allAccounts = Accounts
                    
                      fs.writeFileSync( "./db.json", JSON.stringify(parsedFile), { encoding: "utf-8"})
                      console.log("Account created successfully with amount-0")
            }
            else{
                console.log("Please enter correct command for account creation")
            }
        
      }
      else if(answers.ops === "CREATE" && answers.Confirm){

      }
      else{
          console.log("Please choose correct operation")
      }

    ans = answers
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); 

  export default ans
