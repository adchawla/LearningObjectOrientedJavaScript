/*jshint esversion: 6 */

var monkey = {
    hair: true,
    feeds: 'bananas',
    breathes: 'air'
};

function Human(name) {
    this.name = name;
}

Human.prototype = monkey;

var george = new Human('George');
console.log("monkey.isPrototypeOf(george)", monkey.isPrototypeOf(george));

/**
 * getPrototypeOf
 */
//console.log("", george.getPrototypeOf());
console.log("", george.__proto__);;