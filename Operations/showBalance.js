import fs from "fs"

const showBalance = (command) =>{
    if (command[0] === "BALANCE" && command[1] !== undefined)
    {
         //console.log(command[1]) 
         const file = fs.readFileSync("./db.json", { encoding: "utf-8" });
         const parsedFile = JSON.parse(file);
        // console.log(parsedFile)
         let allAccounts = parsedFile.data;

         const totalBalance = allAccounts.find((ele)=>ele.account_no === command[1])

         console.log("Your total Balance is",totalBalance.balance)
         
    }
    else{
        console.log("Please enter correct command");
    }
}

export default showBalance