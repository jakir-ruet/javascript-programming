// It is primitive
// Unique in each time
// Immutable - Not be Changed

const myVarOne = Symbol('Hello, symbol one');
const myVarTwo = Symbol('Hello, symbol two');
console.log(myVarOne === myVarTwo);
console.log(typeof (myVarOne));
console.log(typeof (myVarTwo));

console.log(myVarOne);
// accecing into the symbol
console.log(myVarOne.description);