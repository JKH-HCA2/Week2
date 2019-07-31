"use strict";

let objs = [
    {name: "Dana", age: 60},
    {name: "Natalie", age: 35},
    {name: "Brittany", age: 33},
    {name: "Zachary", age: 29}
];
function compareNamesAscending(a,b)
{
    if (a.name < b.name)
    {
        return -1;
    }
    return 1;
}
function compareAgeAscending(a,b)
{
    if (a.age < b.age)
    {
        return -1;
    }
    return 1;
}
function compareNamesDescending(a,b)
{
    if (a.name > b.name)
    {
        return -1;
    }
    return 1;
}
function compareAgeDescending(a,b)
{
    if (a.age > b.age)
    {
        return -1;
    }
    return 1;
}
var nameAsc = objs.sort(compareNamesAscending);
console.log(nameAsc)
var ageAsc = objs.sort(compareAgeAscending)
console.log(ageAsc)
var nameDes = objs.sort(compareNamesDescending)
console.log(nameDes)
var ageDes = objs.sort(compareAgeDescending)
console.log(ageDes)