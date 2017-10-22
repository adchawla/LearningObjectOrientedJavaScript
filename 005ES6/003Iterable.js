/*jshint esversion: 6 */

//An iterable object 
//1. Has a method with key has 'Symbol.iterator' 
//2. This method returns an iterator via method 'next' 
let iter = {
    0: 'Hello',
    1: 'World of ',
    2: 'Iterators',
    length: 3,
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                let value = this[index];
                let done = index >= this.length;
                index++;
                return { value, done };
            }
        };
    }
};
for (let i of iter) {
    console.log(i);
} 