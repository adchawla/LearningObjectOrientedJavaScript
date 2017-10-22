/*jshint esversion: 6 */

// Take an array and return iterator
function iter(array) {
    let nextId = 0;
    return {
        next: function() {
            if(nextId < array.length) {
                return {value:array[nextId++], done:false};
            } else {
                return {done:true};
            }
        }
    };
}

var it = iter(['Hello', 'Iterators']);
console.log(it.next().value);    // Hello
console.log(it.next().value);
console.log(it.next().done);