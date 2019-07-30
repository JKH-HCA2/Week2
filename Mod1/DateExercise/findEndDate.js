"use strict";

//date script

let d = new Date("June 1, 2019")
let duration = 90;

let msec_per_day = 1000 * 60 * 60 * 24;

let msecStart = d.getTime();

let endTime = msecStart + (duration * msec_per_day);

let endDate = new Date(endTime);
console.log(endDate.toString());



