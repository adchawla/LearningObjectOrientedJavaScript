/*jshint esversion: 6 */

var greeter = {
    default: "Hello ",
    greet: function (names) {
        names.forEach(function (name) {
            console.log(this.default + name); //Cannot read property 'default' of undefined 
        });
    },
    greet2: function (names) {
        let that = this;
        names.forEach(function (name) {
            console.log(that.default + name); //Cannot read property 'default' of undefined 
        });
    },
    greetWithArrowFunction : function(names) {
        names.forEach( name => {
            console.log(this.default + name);  //lexical this available for this subroutine.
        });
    }
};
console.log(greeter.greet(['world', 'heaven']));
console.log(greeter.greet2(['world', 'heaven']));
console.log(greeter.greetWithArrowFunction(['World', 'Heaven']));
