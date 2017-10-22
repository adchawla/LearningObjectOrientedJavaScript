var outer = function(param) {
  var inner = function(theInput) {
    return theInput * 2;
  };
  return 'The result is ' + inner(param);
}

console.log(outer(2));
console.log(outer(8));
console.log(inner(3));
