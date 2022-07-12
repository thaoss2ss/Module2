let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let newNumbers: number[] = []
let a = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(a) == -1) {
        newNumbers.push(a)
    }
    a++
}
console.log(newNumbers)