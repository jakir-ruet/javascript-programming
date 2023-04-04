// The Object.is() behaves like the === operator with two differences:
// 1. -0 and +0
// 2. NaN

// for === operator
let amount = +0;
let volume = -0;
console.log(amount === volume);

// using the object.is()
let amountObj = +0;
let volumeObj = -0;
console.log(Object.is(amountObj, volumeObj));

// for NaN
let qty = NaN;
console.log(qty === qty);

// using object.is()
console.log(Object.is(qty, qty))