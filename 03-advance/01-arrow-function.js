//function in es3
function esThreeFunction() {
      console.log("This is the function in es5")
}
esThreeFunction()

//function in es5
var esFiveFunction = function (x, y) {
      return x * y
}
var b = esFiveFunction(3, 4)
console.log(`This is esFive function ${b}`)

//fuction in es6 with return
const esSixFunctionReturn = (a, b) => {
      return a * b
}
let c = esSixFunctionReturn(3, 5)
console.log(`this is es6 arrow function with return ${c}`)

//fuction in es6 without return
const esSixFunction = (a, b) => a * b
let d = esSixFunction(3, 5)
console.log(`this is es6 arrow function without return ${d}`)