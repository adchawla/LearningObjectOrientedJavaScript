/*jshint esversion: 6 */

/**
 * Constructor functions don't ever return a value and as a convention are captialized.
 * @param {*} name 
 */
function Hero(name) {
    this.name = name;
    this.occupation = "programmer";
    this.whoAmI = function() {
        return `My name is ${this.name} and I'm a ${this.occupation}`;
    };
}

var myString = 'Aman';

var h1 = new Hero(myString);
var h2 = Hero('Girija');

console.log(h1.whoAmI());
myString = "Girija";
console.log(h1.whoAmI());

console.log(h2.whoAmI());