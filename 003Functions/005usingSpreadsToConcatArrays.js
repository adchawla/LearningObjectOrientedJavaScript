/*jshint esversion: 6 */

var midWeek = ["Wed", "Thu"];

var weekend = ["Sat", "Sun"];

var week = ["Mon", "Tue", ...midWeek, "Fri", ...weekend]

console.log("week :" + week);