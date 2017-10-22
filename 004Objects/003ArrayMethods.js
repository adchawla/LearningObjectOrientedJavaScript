/*jshint esversion: 6 */

let a = [10, 9, 4, 2, 1, 'test'];

let b = a.sort();

console.log(a);
console.log(b);

let newLength = a.push('new value');
console.log("After push: " + a);

let element = a.pop();
console.log("After pop: " + a + " and the element poped is " + element);

console.log("array.join() returns " +  a.join(' * '));

/* slice returns a copy of a slice of an array, start index is inclusive while end index is not */
let slicedArray = a.slice(1, 3);
console.log("sliced array from 1 to 3 is " + slicedArray + " from source array " + a);

/* The splice() method modifies the source array. It removes a slice, returns it, and optionally fills the gap with new elements.
The first two parameters define the start index and length (number of elements) of the slice to be removed; the other parameters pass the new values */
let splicedArray = a.splice(1, 2, "aman", "girija", "ishaan");
console.log("spliced array is " + splicedArray + " and the source array is " + a);