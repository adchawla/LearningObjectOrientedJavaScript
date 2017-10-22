/*jshint esversion: 6 */

function getRGB(hexValue) {
    hexValue = hexValue.substr(1);
    var hexValueInt = Number.parseInt(hexValue, 16);
    var blue = hexValueInt % 256;
    hexValueInt = hexValueInt >> 8;
    var green = hexValueInt % 256;
    hexValueInt = hexValueInt >> 8;
    var red = hexValueInt % 256;
    return `rgb(${red},${green},${blue})`;
}

function prettyPrint(value) {
    console.log(`${value} is + ${getRGB(value)}`);
}

prettyPrint('#00FF00');
prettyPrint('#FFFF00');
prettyPrint('#FFFFFF');
prettyPrint('#05FF00');
