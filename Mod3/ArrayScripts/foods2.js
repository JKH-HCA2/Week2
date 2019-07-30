"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet tea", price: 2.79}
];

function getTotal(receipt)
{
    let total = 0;
    for (let i = 0; i < receipt.length; i++)
    {
        total += receipt[i].price;
    }
var bill = total;
return bill;
}

var mealCost = getTotal(lunch)
var tax = mealCost * .08
var tip = mealCost * .18
console.log(totalBill)

