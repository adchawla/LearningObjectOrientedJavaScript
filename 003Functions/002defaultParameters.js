/*jshint esversion: 6 */

function render(fogLevel = 0, sparkLevel = 10) {
    console.log(`Fog Level: ${fogLevel} and Spark Level: ${sparkLevel}`);
}

render();
render(2, 5);
render(1);
render(undefined, undefined);
render(undefined, 8);

function t(fog_level = 1, spark_level = fog_level) {
    console.log(`Fog Level: ${fog_level} and spark_level: ${spark_level}`)
}

function s(fog_level = 10, spark_level = fog_level * 10) {
    console.log(`Fog Level: ${fog_level} and spark_level: ${spark_level}`);
}
t(10);
s(10);