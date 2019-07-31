"use strict";

let scores = [83, 80, 92, 100, 86, 87]

// Sorts the numbers in the array in ascending order
scores.sort(function(a,b)
{
    if (a < b)
    {
        return -1;
    }
    return 1;
});

function getMedian(data)
{
    // len variable is used to determine whether the array has an odd or even number of values
    let len = (data.length % 2);
    // Statements to execute if the array has an odd number of values
    if (len == 1)
    {
        // half represents the position of the median value in the array
        let half = Math.floor(data.length / 2);
        let median = data[half];
        return median;
    }
    // Statements to execute if the array has an even number of values
    else
    {
        // half represents the position one of the two median values in the array
        let half = (data.length / 2)
        let median = ( data[half] + data[half - 1] ) / 2
        return median;
    }
}

let median = getMedian(scores)
console.log("The median is " + median)
