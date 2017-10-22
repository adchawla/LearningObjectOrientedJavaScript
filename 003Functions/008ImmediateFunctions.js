(
  function() {
    console.log('I am an immediate function');
  }
)();

(
  function(name) {
    console.log(`I am an immediate function with arguments: ${name}`);
  }
)('aman');


