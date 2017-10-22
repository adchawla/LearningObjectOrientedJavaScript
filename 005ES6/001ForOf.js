/*jshint esversion: 6 */

const iter = ['a', 'b'];
for (const i of iter) {
    console.log(i);
}

for (let c of "Amandeep Chawla") {
    console.log(c);
}

/**
 * The main difference between the for...in and for...of loop is that the for...in loop iterates through all enumerable properties of an object.
 * For...of loop has a specific purpose, and that is to follow the iteration behavior based on how the object defines the iterable protocol.
 */