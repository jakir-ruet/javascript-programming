let a = 0;
let b = 1;
let obj1 = {
   a: 3,
};

console.log(obj1?.b); //if the property (after of ?.) is exist in the object (left side of ?.) so that returns the prop or undefined
console.log(a ?? b); //if a is null that returns b otherwise that returns a
console.log(obj1?.a ?? obj1?.b)
