/*jshint esversion: 6 */

let o = new Object();
let a = new Array();

o[0] = "zero for Object";
a[0] = "zero for Array";
o[10] = "ten for Object";
a[10] = "ten for Array";
o.myProp = "myProp for Object";
a.myProp = "myProp for Array";

console.log(o);
console.log(a);

console.log(o.length);
console.log(a.length);