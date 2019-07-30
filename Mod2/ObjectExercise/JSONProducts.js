"use strict";

var product =
{
    productId: "1234",
    productName: "car",
    unitPrice: "9.99",
    quantity: "2"
};

var str = JSON.stringify(product);
console.log(str);
let str1 = 
`{
    "productId" : "1234",
    "productName" : "car",
    "unitPrice" : "9.99",
    "quantity" : "2"
}`
let prod = JSON.parse(str1);
console.log(prod.productId);
console.log(prod.unitPrice);
console.log(prod);