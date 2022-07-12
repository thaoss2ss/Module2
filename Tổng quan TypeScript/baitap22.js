var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
var newNumbers = [];
var a = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(a) == -1) {
        newNumbers.push(a);
    }
    a++;
}
console.log(newNumbers);
