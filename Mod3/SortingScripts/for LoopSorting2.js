"use strict";

let objs = [
    {name: "Dana", age: 60},
    {name: "Natalie", age: 35},
    {name: "Brittany", age: 33},
    {name: "Zachary", age: 29}
];

objs.sort(function(a,b)
{
    if (a.name < b.name)
    {
        return -1;
    }
    return 1;
});

let len = objs.length;
for (let i = 0; i < len; i++)
{
    console.log(objs[i].name + " " + objs[i].age);
}


