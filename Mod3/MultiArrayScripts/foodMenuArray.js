"use strict";

// Array of different menus
let menu = [
    [
        // Breakfast menu
        {item: "Sausage and Egg Biscuit", price: 3.49},
        {item: "Pancakes", price: 4.49},
        {item: "Waffles", price: 4.99}
    ],
    [
        // Lunch Menu
        {item: "Chicken Salad", price: 4.59},
        {item: "Roast Beef Sandwich", price: 6.49},
        {item: "Pizza", price: 7.99},
        {item: "Quesadilla", price: 5.99}
    ],
    [
        // Dinner Menu
        {item: "Steak", price: 10.99},
        {item: "Shrimp Scampi", price: 9.49},
        {item: "Seared Tuna", price: 11.99},
        {item: "Tacos", price: 5.99},
        {item: "Lobster Roll", price: 9.99}
    ]
]

let numMenus = menu.length;

// User input of menu choice
let meal = 1

if (meal == 0)
{
    console.log("Breakfast Menu")

}
else if (meal == 1)
{
    console.log("Lunch Menu")
}
else
{
    console.log("Dinner Menu")
}

let len = menu[meal].length
for (let i = 0; i < len; i++)
{
    console.log(menu[meal][i].item + " " + menu[meal][i].price);
}