import fs from "fs"

const withdrawl = (command) =>{
     
    //console.log(command)
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
              // console.log(newData)
             }
             else{
                console.log("Your balance is less than the entered amount to be withdrawn!");
             }

            // console.log(parsedFile)
              
        }
}

export default withdrawl