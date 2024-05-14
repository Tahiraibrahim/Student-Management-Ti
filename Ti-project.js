#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let my_balance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["HTML", "MS.OFFICE", "CSS", "JAVASCRIPT", "NEXTJS", "TYPESCRIPT", "PYTHON"]
    }
]);
const tutionFee = {
    "HTML": 2500,
    "MS.OFFICE": 3000,
    "CSS": 4000,
    "JAVASCRIPT": 7000,
    "NEXTJS": 8600,
    "TYPESCRIPT": 9000,
    "PYTHON": 10000
};
console.log(`\nTution fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance : ${my_balance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"],
    },
    {
        name: "Amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    }
]);
console.log(`\n You select payment method ${paymentType.payment}\n`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.Amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations, You have successfully enrolled in ${answer.courses}.\n `);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"],
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n*******Status*******\n");
        console.log(`Student Name : ${answer.students}`);
        console.log(`Student ID : ${randomNumber}`);
        console.log(`Course : ${answer.courses}`);
        console.log(`Tution Fees paid : ${paymentAmount}`);
        console.log(`Balance : ${my_balance += paymentAmount}`);
    }
    else {
        console.log("\n EXISTING STUDENT MANAGEMENT SYSTEM\n");
    }
}
else {
    console.log("Invalid Amount due to course\n");
}
