"use strict";

function parseAndDisplayName(name)
{
    let fullName = name;
    let pos1 = fullName.indexOf(" ");
    let pos2 = fullName.lastIndexOf(" ");
    if (pos1 == -1)
    {
        let displayName = fullName
        console.log("Name: " + displayName)
        console.log("Only name: " + displayName)
        return;
    }
    else if (pos1 == pos2)
    {
        let fName = fullName.substring(0,pos1)
        let lName = fullName.substring(pos1+1)
        console.log("First name: " + fName)
        console.log("Last name: " + lName)
        console.log("Full Name: " + fullName)
    }
    else
    {
        let fName = fullName.substring(0,pos1)
        let mName = fullName.substring(pos1+1,pos2)
        let lName = fullName.substring(pos2+1)
        console.log("First name: " + fName)
        console.log("Middle name: " + mName)
        console.log("Last name: " + lName)
        console.log("Full name: " + fullName)
    }
}

parseAndDisplayName("Betty"); parseAndDisplayName("Brenda Kaye"); parseAndDisplayName("Betty Jo Smalltree");