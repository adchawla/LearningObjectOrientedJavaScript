var a = ['a', 'b', 'c', 'd', 'e'];

var result = '\n';
a[100] = 'you know';

for (var i in a) {
    result += 'index: ' + i + ", value: " + a[i] + "\n";
}

console.log("The result is " + result); 