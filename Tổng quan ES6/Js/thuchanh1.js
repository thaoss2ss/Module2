
/*
// Example 1: Here we have copied the array

const cars1 = ["AUDI","BMW","TATA","MERCEDES"];

const cars2 = [...cars1];


const cars3 = [...cars1,"NISSAN","TOYOTA"];

console.log(cars1);
console.log(cars2);
console.log(cars3);
*/

/*
// Example 2: Use spread operator for merging arrays
const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
const cars2 = ["NISSAN","TOYOTA"];

const cars3 = [...cars1, ...cars2];

console.log(cars3);
*/

/*
// Example 3: We will use the spread operator with objects

const cars1 = {
    Brand : "BMW",
    Color : "RED"
}

const cars2 = {...cars1};
console.log(cars2);
*/

/*
//Example 4: We will use spread operator for merging objects.

const cars1 = {
    Brand : "Toyota",
    Color : "RED"
}

const cars2 = {
    Brand : "Nissan",
    Color : "BLUE",
    Year : 2004
}
const cars3 = {...cars1,...cars2};
console.log(cars3);
*/

/*
// Example 5: Use the spread operator to split the string into an array of strings.
const car = "AUDI";
const a = [...car];
console.log(a);
*/


// Example 6: Use the spread operator with array destructuring.
const numbers = [3,5,7,8,9];

const [a,b,c,...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);
