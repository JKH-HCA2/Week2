"use strict";

let d = new Date("02/18/1994");
let day = d.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let monthName = months[d.getMonth()];

let year = d.getFullYear();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekDay = days[d.getDay()];

console.log(day + "-" + monthName + "-" + year + "(" + weekDay + ")")
