/*jshint esversion: 6 */

function Gadget(name, color) {
    this.name = name;
    this.color = color;
    this.whatAreYou = function () {
        return 'I am a ' + this.color + ' ' + this.name;
    };
} 

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function() {
    return 'Rating: ' + this.rating +', price: ' + this.price;
};

let g = new Gadget("myGadget", "red");
console.log(g.whatAreYou() + " " + g.getInfo());

/* prototype is live */
Gadget.prototype.get  = function(what) {
        return this[what];
    };

console.log(g.get('price'));

/**
 * checking the properties which are enumerable
 */
console.log("Printing all the enumerable propeties for g");

for (var prop in g) {
    console.log(prop + ' = ' + g[prop] + ' and is enumerable: ' + g.propertyIsEnumerable(prop) + ' and is ownProperty: ' + g.hasOwnProperty(prop));
}
