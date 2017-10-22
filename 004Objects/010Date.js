/**
 * Date() is a constructor function that creates date objects. You can create a new object by passing:
 *      Nothing (defaults to today's date)
 *      A date-like string
 *      Separate values for day, month, time, and so on
 *      A timestamp
 */
let today = new Date();
console.log("Today date is", today);

let mybirthday = new Date(1981, 0, 30);
console.log("I was born on ", mybirthday);

let girijaBirthday = new Date("03/01/1983");
console.log("Girija's was born on ", girijaBirthday);

/* If you call Date() without new, you get a string representing the current date, whether or not you pass any parameters */
console.log("Current date and time is", Date());


