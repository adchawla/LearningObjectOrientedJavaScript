/*jshint esversion: 6 */

/* Similar to Boolean(), the Number() function can be used as:
    1. A constructor function (with new) to create objects.
    2. A normal function in order to try to convert any value to a number. This is similar to the use of parseInt() or parseFloat():
*/

let n = Number('1.345');
console.log("Number('1.345')", n);
console.log("typeof Number('1.345')", typeof n);

let n1 = new Number('1.351');
console.log("typeof new Number('1.351')", typeof n1);
let n2 = n1.valueOf();
console.log("typeof new Number().valueof()", typeof n2);
console.log("valueof new Number()", n2);

/* As functions are objects, they can also have properties.
The Number() function has constant built-in properties that you cannot modify
*/
console.log("Number.MAX_VALUE", Number.MAX_VALUE);
console.log("Number.MIN_VALUE", Number.MIN_VALUE);
console.log("Number.POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
console.log("Number.NaN", Number.NaN);

/* The number objects provide three methods-toFixed(), toPrecision(), and toExponential() */
console.log("Number().toFixed(1)", n1.toFixed(1));

/* Note that you can use these methods without explicitly creating a Number object first.
 In such cases, the Number object is created (and destroyed) for you behind the scenes */
console.log("Number(12345).toExponential", (12345).toExponential());

/* Like all objects, the Number object also provide the toString() method.
 When used with Number object, this method accepts an optional radix parameter (10 being the default) */
let n3 = new Number(255);
console.log("Decimal equivalent of 255", n3.toString());
console.log("Hexadecimal equivalent of 255", n3.toString(16));
console.log("Octal equivalent of 255", n3.toString(8));
console.log("Binary equivalent of 255", n3.toString(2));