"use strict";



function parsePartCode(partCode)
{
    let pos1 = partCode.indexOf(":");
    let pos2 = partCode.indexOf("-");

    let parsedCode = {
        supplierCode: partCode.substring(0,pos1),
        productNumber: partCode.substring(pos1+1,pos2),
        size: partCode.substring(pos2+1)
    };
    return parsedCode;
}

var partCodeA = "XYZ:1234-L";
var part1 = parsePartCode(partCodeA)
console.log("Supplier: " + part1.supplierCode + " Product Number: " + part1.productNumber + " Size: " + part1.size);

