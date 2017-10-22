/*jshint esversion: 6 */

function sayThings(tone, ...quotes) {
    console.log(Array.isArray(quotes));
    console.log(`In ${tone} voice, I say ${quotes}`);
}

sayThings("Morgan Freeman","Something serious"," Imploding Universe"," Amen"); 