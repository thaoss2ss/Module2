
function fibonacci(n) {
    if (n === 0 || n === 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

let maxNumber = 10;
let sum = 0;
for(let i = 0; i < maxNumber; i++) {
    sum += fibonacci(i);
}
console.log(sum);