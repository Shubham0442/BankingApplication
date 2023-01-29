import create from "../Operations/create.js";
import deposit from "../Operations/deposit.js";
import showBalance from "../Operations/showBalance.js";
import withdrawl from "../Operations/withdrawl.js";


const answers = (answers) => {
  // Use user feedback for... whatever!!
  //console.log("INDEX", answers)

  const command = answers.command.split(" ");

  if (answers.ops === "CREATE" && answers.Confirm) {
    create(command);
  } else if (answers.ops === "SHOW BALANCE" && answers.Confirm) {
    showBalance(command);
  } else if (answers.ops === "DEPOSIT" && answers.Confirm) {
    deposit(command);
  } else if (answers.ops === "WITHDRAW" && answers.Confirm) {
    withdrawl(command);
  } else {
    console.log("Please choose correct operation");
  }
};
export default answers;
