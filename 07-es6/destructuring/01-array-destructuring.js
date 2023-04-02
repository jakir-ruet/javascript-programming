let myArray = [3, 4, [4, 5, 6, 5], 2, 5, 6, 7, 3, 2];

// let [a, b, c] = myArray;
// console.log(a, b, c)

// skiping/resting some values
let [, , a, ...c] = myArray; // here using the rest & spread operator
console.log(a, c);