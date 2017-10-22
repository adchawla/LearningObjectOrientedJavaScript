/*jshint esversion: 6 */

// we can't use typeof for differentiating between arrays and objects.

console.log("typeof [] = " + typeof []);
console.log("typeof {} = " + typeof {});

// Object.prototype.toString can be used
console.log("toString on array", Object.prototype.toString.call([]));
console.log("toString on object", Object.prototype.toString.call({}));

// some more fun with the Object.prototype.toString
(function() {
    console.log("toString on arguments", Object.prototype.toString.call(arguments));
}());