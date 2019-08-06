"use strict";

/* This function collects data from the user input form and checks it against the validator
*  to determine if the entered data is a valid zip code
*
* @param canadianZipPattern (Expression) - regular expression used to validate the zip code
* @param message (String) - message to display after validation
* @param code (Number) - user entered zip code to be tested
*
*/
function zipValidator(code)
{ 
    let canadianZipPattern = /^(?<full>(?<part1>[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1})(?:[ ](?=\d))?(?<part2>\d{1}[A-Z]{1}\d{1}))$/;
    let message;
    if (canadianZipPattern.test(code) == true)
    {
        message = code + " is a valid zip code"
    }
    else
    {
        message = code + " is not a valid zip code"
    }
    return message;
}

/* The function loads the button click event and connects the javascript to the html form fields
*
* @param validField (text) - user input text field
* @param outputField (text) - output field on the form
*
*/
window.onload = function()
{
    let validField = document.getElementById("zipEntry");
    let outputField = document.getElementById("zipChecker");    

    const btn = document.getElementById("validateBtn")
    btn.onclick = function()
    {
        let message = zipValidator(validField.value)
        outputField.value = message;
    }
}
