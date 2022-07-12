function fibonacci(n) {
    if (n === 0 || n === 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var maxNumber = 10;
var sum = 0;
for (var i = 0; i < maxNumber; i++) {
    sum += fibonacci(i);
}
console.log(sum);
