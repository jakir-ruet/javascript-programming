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

//function in es6 with return
const esSixFunctionReturn = (a, b) => {
      return a * b
}
let c = esSixFunctionReturn(3, 5)
console.log(`this is es6 arrow function with return ${c}`)

//function in es6 without return
const esSixFunction = (a, b) => a * b
let d = esSixFunction(3, 5)
console.log(`this is es6 arrow function without return ${d}`)

var myObject = [
      {
            id: 54001,
            name: "Rahim",
            designation: "CTO",
            point: 3.65
      },
      {
            id: 54002,
            name: "Karim",
            designation: "PE",
            point: 2.98
      }
]
console.log(myObject)
console.table(myObject)
//using filter & map in function
function myFunction() {
      return myObject.filter(
            function (x) {
                  return x.point > 3
            }
      ).map(function (y) {
            return y.name
      });
}
console.log("result from function" + " " + myFunction())
console.log("=============function============")
//using the arrow function
// const myArrowFunction = () => {
//       return myObject.filter((x) => x.point > 3).map((y) => y.name)
// }
// console.log(myArrowFunction())

const myArrowFunction = () => myObject.filter((x) => x.point > 3).map((y) => y.name)
console.log(myArrowFunction())