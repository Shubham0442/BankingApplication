import fs from "fs"

const deposit = (command) =>{
       
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
    else {
        console.log("Please enter correct command");
    }
}

export default deposit