/*jshint esversion: 6 */

function sumAll(a, b, c) {
    return a+b+c;
}

var numbers = [4, 6, 7];

console.log(`The sum of ${numbers} is ${sumAll(...numbers)}`);