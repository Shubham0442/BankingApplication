import fs from "fs"

const operations = (answers) => {
    // Use user feedback for... whatever!!
    //console.log("INDEX", answers)

    if (answers.ops === "CREATE" && answers.Confirm) {
      const command = answers.command.split(" ");
      //console.log(command[0])

      if (command[0] === "CREATE") {
       
        const file = fs.readFileSync("./db.json", { encoding: "utf-8" });
        const parsedFile = JSON.parse(file);
        console.log(parsedFile)
        let allAccounts = parsedFile.data;

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
      } else {
        console.log("Please enter correct command for account creation");
      }
    }
    else if (answers.ops === "SHOW BALANCE" && answers.Confirm) 
    {
        const command = answers.command.split(" ");
        //console.log(command)
        if (command[0] === "BALANCE" && command[1] !== undefined)
        {
             //console.log(command[1]) 
             const file = fs.readFileSync("./db.json", { encoding: "utf-8" });
             const parsedFile = JSON.parse(file);
            // console.log(parsedFile)
             let allAccounts = parsedFile.data;

             const totalBalance = allAccounts.find((ele)=>ele.account_no === command[1])

             console.log("YOUR TOTAL BALANCE IS $",totalBalance.balance)
             
        }
        
    }
    else if (answers.ops === "DEPOSIT" && answers.Confirm) 
    {
        const command = answers.command.split(" ");
        //console.log(command)
        if (command[0] === "DEPOSIT" && command[1] !== undefined)
        {
             //console.log(command[1]) 
             const file = fs.readFileSync("./db.json", { encoding: "utf-8" });
             const parsedFile = JSON.parse(file);
            // console.log(parsedFile)
             let allAccounts = parsedFile.data;

             const newData = allAccounts.map((elem)=>
                elem.account_no === command[1] ? 
                { ...elem,
                    balance : elem.balance + Number(command[2])
                } : elem
            )
            //allAccounts = Accounts 
            parsedFile.data = newData,

            fs.writeFileSync("./db.json", JSON.stringify(parsedFile), {
            encoding: "utf-8",
            });
            console.log("Amount deposited successfully!");
            //console.log(newData) 
        }
        
    }
    else if (answers.ops === "WITHDRAW" && answers.Confirm) 
    {
        const command = answers.command.split(" ");
        console.log(command)
        if (command[0] === "WITHDRAW" && command[1] !== undefined)
        {
             //console.log(command[1]) 
             const file = fs.readFileSync("./db.json", { encoding: "utf-8" });
             const parsedFile = JSON.parse(file); 

             const requiredAccount = parsedFile.data.find((elem)=>elem.account_no === command[1])

             if(requiredAccount.balance > Number(command[2]))
             {
                let allAccounts = parsedFile.data;

                const newData = allAccounts.map((elem)=>
                   elem.account_no === command[1] ? 
                   { ...elem,
                       balance : elem.balance - Number(command[2])
                   } : elem
               )
               //allAccounts = Accounts 
               parsedFile.data = newData,
   
               fs.writeFileSync("./db.json", JSON.stringify(parsedFile), {
               encoding: "utf-8",
               });
               console.log("Amount withdrawn successfully!");
               console.log(newData)
             }
             else{
                console.log("Your balance is less than the entered amount to be withdrawn!");
             }

            // console.log(parsedFile)
              
        }
        
    }
     else {
      console.log("Please choose correct operation");
    }
  }
export default operations