const questions = [
    /* Pass your questions in here */
    {
        type: "list",
        name : "ops",
        message : "What operation need to do",
        choices : [ "CREATE", "WITHDRAW", "DEPOSIT", "SHOW BALANCE"],
    },
    {
        type : "input",
        message: `Enter command`,
        name : "command"
    },
    {
        type : "confirm",
        message: "Please confirm",
        name : "Confirm"
    }
  ] 

  export {questions}

 // console.log(questions)