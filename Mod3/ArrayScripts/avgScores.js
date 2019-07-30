"use strict";

let scores = [78, 80, 82, 54, 97, 67, 91];

function getAverage(score)
{
    let total = 0;
    for (let i = 0; i < score.length; i++)
    {
        total += score[i];
    }
var avg = total / score.length;
return avg;
}

var average = getAverage(scores)
console.log(average.toFixed(2))