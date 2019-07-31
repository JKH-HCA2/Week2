"use strict";

function getTotalBill()
{
    let totalBill = 0;

    let hotFudge = document.getElementById("hotFudge").checked;
    if (hotFudge)
    {
        totalBill += 1.25
    }

    let sprinkles = document.getElementById("sprinkles").checked;
    if (sprinkles)
    {
        totalBill += 0.25
    }

    let whippedCream = document.getElementById("whippedCream").checked;
    if (whippedCream)
    {
        totalBill += 0.75
    }

    if (document.getElementById("oneScoop").checked)
    {
        totalBill += 2.50
    }
    else if (document.getElementById("twoScoop").checked)
    {
        totalBill += 3.75
    }
    else
    {
        totalBill += 5.00
    }
    const billField = document.getElementById("totalBill");
    billField.value = "$ " + totalBill.toFixed(2);
}

window.onload = function()
{
    const btn = document.getElementById("priceDessert")
    btn.onclick = getTotalBill;
}
