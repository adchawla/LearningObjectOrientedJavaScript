/*jshint esversion: 6 */

let b = new Boolean();
console.log("typeof b", typeof b);

let value = b.valueOf();
console.log("typeof Boolean.valueof()", typeof value);
console.log("valueof Boolean", value);

/* The Boolean() function, when called as a normal function without new,
 converts non- Booleans to Booleans (which is like using a double negation !!value)
 */
console.log("Boolean(\"test\")", Boolean("test"));
console.log('Boolean("")', Boolean(""));
console.log("Boolean({})", Boolean({}));
console.log("Boolean(new Boolean())", Boolean(new Boolean()));