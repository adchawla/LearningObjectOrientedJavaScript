/*jshint esversion: 6 */

/* Manual creation of array like objects to Arrays */
function toArray(args) {
    let result = [];
    for(let i = 0; i < args.length; ++i) {
        result[i] = args[i];
    }
    return result;
}

function doSomething() {
    var args = toArray(arguments);
    console.log(args);
}

doSomething();
doSomething("hello", "world");

/* ES6 way */
function doSomethingES6Way() {
    console.log(Array.from(arguments));
}

doSomethingES6Way();
doSomethingES6Way("Hello", "World");

function doSomethingES6WayAndMap() {
    console.log(Array.from(arguments, function(arg) {
        return arg.toUpperCase();
    }));
}

doSomethingES6WayAndMap();
doSomethingES6WayAndMap("Hello", "World");

let arr = Array.of(1);
console.log(arr);

let arr1 = ['a', 'b', 'c'];
for (const index of arr1.keys()) {
  console.log(index);
}

var arr3 = ['w', 'y', 'k', 'o', 'p'];
var iterator = arr3.entries();

for (let letter of iterator) {
    console.log(letter);
}