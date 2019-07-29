"use strict";


function parseAndDisplayName()
{
    let name = "Saddalee Grace";

    let pos = name.indexOf(" ");

    let firstName = name.substring(0,pos);
    let lastName = name.substring(pos+1);

    console.log("Name: " + name); 
    console.log("First name: " + firstName); 
    console.log("Last name: " + lastName);
}

parseAndDisplayName();