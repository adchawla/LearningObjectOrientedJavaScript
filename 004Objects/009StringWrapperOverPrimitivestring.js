/*jshint esversion: 6 */

let obj = new String("World");

console.log("typeof new String()", typeof obj);
let primitive = obj.valueOf();
console.log("typeof String().valueof()", typeof primitive);
console.log("valueof String()", primitive);

/* A String object is similar to an array of characters.
 String objects have an indexed property for each character, and they also have a length property */
console.log("String()[0]", obj[0]);
console.log("String.length", obj.length);

/* To extract the primitive value from the String object, you can use the valueOf() or toString() method inherited from Object.
 You'll probably never need to do this, as toString() is called behind the scenes if you use an object in a primitive string context */
 console.log("String().toString()", obj.toString());
 console.log("Implicit call to toString()", obj + "");

 /* The primitive strings are not objects, so they don't have any methods or properties.
  However, JavaScript also offers you the syntax to treat primitive strings as objects (just like you already saw with primitive numbers).

 In the following example, String objects are being created (and then destroyed)
 behind the scenes every time you treat a primitive string as if it were an object */

console.log('"tomato".length', "tomato".length);
console.log('"potatoes"["potatoes".length - 1]', "potatoes"["potatoes".length - 1]);

/* The empty string is a falsy value, but any string object is truthy (because all objects are truthy) */
console.log('Boolean("")', Boolean(""));
console.log('Boolean(new String(""))', Boolean(new String("")));

/* Similar to Number() and Boolean(), if you use the String() function without new, it converts the parameter to a primitive */
console.log('String(1)', String(1));

/* If you pass an object to String(), this object's toString() method will be called first */
console.log('String({p: 1})', String({ p: 1 }));
console.log('String([1, 2, 3])', String([1, 2, 3]));
