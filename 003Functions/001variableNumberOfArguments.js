function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; ++i) {
        if (typeof arguments[i] === 'string') {
            result += arguments[i] * 1;
        } else {
            result += arguments[i];
        }
    }
    return result;
}

console.log( "sum() is " + sum() );
console.log( "sum(1,3) is " + sum(1,3) );
console.log( "sum(1,3,4) is " + sum(1,3,4) );
console.log( "sum(1,3,'5') is " + sum(1,3,'5') );
