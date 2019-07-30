"use strict";

var date1 = new Date("July 22, 2019");
var date2 = new Date("September 6, 2019");

let msec_per_day = 1000 * 60 * 60 * 24

let timeElapsed = date2.getTime() - date1.getTime();

let dayDiff = timeElapsed / msec_per_day;
let numDays = Math.round(dayDiff);


console.log("The number of days between dates is " + numDays);