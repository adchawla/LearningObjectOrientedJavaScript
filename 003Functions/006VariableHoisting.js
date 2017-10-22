
var a = 5;

function f() {
    console.log(`The value of a is ${a}`);
    var a = 10;
    console.log(`The value of a is ${a}`);
}

f();