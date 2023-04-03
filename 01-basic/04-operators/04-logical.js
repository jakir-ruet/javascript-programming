// &&
// ||
// !
// ?. // option chaining
// ?? //nullish
let a = 0
let b = 1
let obj1 = {
   a: 3,
}

console.log(a && b)
console.log(a || b)
console.log(!a)
console.log(!(a || b)) //NOR
console.log(!(a && b)) //NAND
console.log(obj1?.b) //if the property (after of ?.) is exist in the object (left side of ?.) then it return the prop or undefined
console.log(a ?? b) //if a is null that returns b otherwise that returns a