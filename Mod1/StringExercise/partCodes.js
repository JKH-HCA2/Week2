"use strict";

var code = "ACME:123-L"

function getSupplierCode()
{
    let code = "ACME:123-L"

    let pos1 = code.indexOf(":");

    let supplierCode = code.substring(0,pos1);
    console.log(supplierCode)
}

function getProductNumber()
{
    let code = "ACME:123-L"

    let pos1 = code.indexOf(":");
    let pos2 = code.indexOf("-");

    let productNumber = code.substring(pos1+1,pos2)
    console.log(productNumber + " is supplied by ")
}

function getSize()
{
    let code = "ACME:123-12";

    let pos2 = code.indexOf("-");

    let size = code.substring(pos2+1);
    if (size == "L")
    {
        size = "large (L)"
    }
    else if (size == "M")
    {
        size = "medium (M)"
    }
    else
    {
        size = ("size " + size)
    }
    console.log("the " + size + " part ")
}

function parseCode()
{
    getSize();
    getProductNumber();
    getSupplierCode();
}

parseCode();
