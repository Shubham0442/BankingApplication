# Banking Application

## To start the application: 
To start application first run the command ***npm install*** and then run command - ***npm run start*** or ***node index.js***


## Selecting the operations to be performed 
When you run application, it will ask
***"What operation need to do"***
select the opetations with Arrow keys 
- CREATE 
- WITHDRAW
- DEPOSIT 
- SHOW BALANCE

## Steps to perform the Selected operation 
### CREATE 
- After selecting the operation to be performed, it will ask to ***"Enter command"***, so run the command with keyword ***"CREATE"***, followed by ***"account number"*** and ***"name"***
**e.g. CREATE ACC001 KELP** 
- after entering the command it will ask to confirm. Confirm with ***"y"*** for "yes" or ***"n"*** to "aborting the operation". 
- If account with same account number is alreay in database, it will show message, ***"Account Already exist!"***
- After successfully creating account, it will show message, ***"Account created successfully with amount-0"*** 

### DEPOSIT 
- After selecting the operation to be performed, it will ask to ***"Enter command"***, so run the command with keyword ***"DEPOSIT"***, followed by ***"account number"*** and ***"amount to be deposited"***
**e.g. DEPOSIT ACC001 10000** 
- after entering the command it will ask to confirm. Confirm with ***"y"*** for "yes" or ***"n"*** to "aborting the operation". 
- After successfully depositing the amout, it will show message, ***"Amount deposited successfully!"*** 

### WITHDRAW
- After selecting the operation to be performed, it will ask to ***"Enter command"***, so run the command with keyword ***"WITHDRAW"***, followed by ***"account number"*** and ***"amount to be withdrawn"***
**e.g. WITHDRAW ACC001 4000** 
- After entering the command it will ask to confirm. Confirm with ***"y"*** for "yes" or ***"n"*** to "aborting the operation".
- If the amount to be withdrawn is more the the balance, it will show message ***"Your balance is less than the entered amount to be withdrawn!"***
- After successfully depositing the amout, it will show message, ***"Amount withdrawn successfully!"*** 

### SHOW BALANCE
- After selecting the operation to be performed, it will ask to ***"Enter command"***, so run the command with keyword ***"BALANCE"***, followed by ***"account number"***
***e.g. BALANCE ACC001***
- after entering the command it will ask to confirm. Confirm with ***"y"*** for "yes" or ***"n"*** to "aborting the operation". 
- After successfully depositing the amout, it will show message, ***"Your total Balance is 6000"*** 