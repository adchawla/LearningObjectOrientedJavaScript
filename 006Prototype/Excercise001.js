var shape = {
    type:'shape',
    getType: function() {
        return this.type;
    }
};

function Triangle(a, b, c) {
    this._a = a;
    this._b = b;
    this._c = c;
    this.getPerimeter = function() {
        return this._a + this._b + this._c;
    };
}
Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.type = 'triangle';

var t = new Triangle(1, 2, 3);
console.log("t.constructor === Triangle", t.constructor === Triangle);
console.log("shape.isPrototypeOf(t)", shape.isPrototypeOf(t));
console.log("t.getPerimeter()", t.getPerimeter());
console.log("t.getType()", t.getType());
