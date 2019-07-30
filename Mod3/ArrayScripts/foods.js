"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet tea", price: 2.79}
];

function getTotal(receipt)
{
    let result = receipt.map(meal => meal.price);
    let total = 0;
    for (let i = 0; i < result.length; i++)
    {
        total += result[i];
    }
var bill = total;
return bill;
}

var bill = getTotal(lunch)
var tax = bill * .08
var tip = bill * .18
var totalBill = bill + tax + tip
console.log("Your total bill is $" + totalBill.toFixed(2))
