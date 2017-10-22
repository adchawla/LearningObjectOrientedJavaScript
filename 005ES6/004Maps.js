/*jshint esversion: 6 */

/* You can create a map using the iterable key value pairs. */

const m2 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
console.log("m2.has(4)", m2.has(4));
console.log("m2.get(4)", m2.get(4));
m2.set(4, 'four');
console.log("m2.has(4)", m2.has(4));
console.log("m2.get(4)", m2.get(4));
const obj = {};
m2.set(obj, 'My obj');
console.log("m2.size", m2.size);
m2.delete(4);
console.log("m2.size", m2.size);

/* ITERATING OVER MAPS */
for (const k of m2.keys()) {
    console.log(k);
}

for (const v of m2.values()) {
    console.log(v);
}

for (const e of m2.entries()) {
    console.log(e[0], e[1]);
}

for( const [key, value] of m2.entries()) {
    console.log(key, value);
}
