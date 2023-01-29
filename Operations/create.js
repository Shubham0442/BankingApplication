import fs from "fs"

const create = (command) =>{
       //console.log(command)
    if (command[0] === "CREATE") {
       
        const file = fs.readFileSync("./db.json", { encoding: "utf-8" });
        const parsedFile = JSON.parse(file);
        //console.log(parsedFile)
        let allAccounts = parsedFile.data; 

        const account = allAccounts.find((elem)=>elem.account_no === command[1])

        if(account){
          console.log("Account Already exist!")
        }
        else{
          let payload = {
            account_no: command[1],
            account_name: command[2],
            balance: 0,
          };
  
          let Accounts = [...allAccounts, payload];
          //console.log(Accounts)
          parsedFile.data = Accounts;
  
          //allAccounts = Accounts
  
          fs.writeFileSync("./db.json", JSON.stringify(parsedFile), {
            encoding: "utf-8",
          });
          console.log("Account created successfully with amount-0");
        }
      } else {
        console.log("Please enter correct command for account creation");
      }
}

export default create