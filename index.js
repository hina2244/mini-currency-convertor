#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlackBright("***CURRENCY CONVERTOR***"));
const currency = {
    USD: 1, //base currency
    PKR: 277.54,
    INR: 83.30,
    EUR: 0.92,
    NZD: 1.66,
    NPR: 133.08,
    MAD: 10.06,
    EGP: 47.33,
    IRR: 42075.00,
    AFN: 71.23,
    IQD: 1308.17,
};
let userSelection = await inquirer.prompt([
    {
        name: "From",
        message: "SELECT YOUR CURRENCY WHICH YOU WANT TO CONVERT",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQD",],
    },
    {
        name: "To",
        message: "SELECT YOUR CURRENCY IN WHICH YOU WANT TO CONVERT",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQD",],
    },
    {
        name: "Amount",
        message: "HOW MUCH AMOUNT YOU WANT TO CONVERT",
        type: "number",
    }
]);
let fromlist = currency[userSelection.From]; //pkr 277.54
let tolist = currency[userSelection.To]; //
let amount = userSelection.Amount; // 5000
let BaseAmount = amount / fromlist; //5000 /277.54
let convertedAmount = BaseAmount * tolist;
let result = Math.round(convertedAmount);
console.log(chalk.bgMagenta(result));
