import inquirer from "inquirer";
//asking question from user through inquirer
let answers = await inquirer.prompt([
{message:"enter first value", type:"number", name:"firstNumber"},
{message: "enter second value", type:"number", name:"secondNumber"},
{
    message: "select one operator to perform operation",
    type: "list",
    name: "operators",
    choices:["addition","subtraction","multiplication","division"],
}
]);
//conditions operators
if(answers.operators == "addition"){
console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operators == "subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
    }
else if(answers.operators == "multiplication"){
        console.log(answers.firstNumber * answers.secondNumber)
        }
else if(answers.operators == "division"){
            console.log(answers.firstNumber / answers.secondNumber)
            }
else{
console.log("invalid number please try again.THANKYOU!")
}
