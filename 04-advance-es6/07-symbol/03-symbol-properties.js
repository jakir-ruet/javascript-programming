const mySym = Symbol('Hello, Symbol');
console.log(mySym.description);

const myStrArray = ['I', 'am', 'Jakir'];
const myNuArray = [5, 4, 0, 0, 3];

// using isConcatSpreadable property
myNuArray[Symbol.isConcatSpreadable] = false;
let result = myStrArray.concat(myNuArray);
console.log(result);

// // using isConcatSpreadable property
// myStrArray[Symbol.isConcatSpreadable] = true;
// let resultB = myNuArray.concat(myStrArray);
// console.log(resultB);