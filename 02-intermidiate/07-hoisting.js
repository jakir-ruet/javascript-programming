// // var hoisting
// console.log(num)
// var num = 10  // declaration
// num = 16
// console.log(num) // return 10

// // let hoisting
// //console.log(num)
// let num = 18
// console.log(num)

// // const hoisting
// //console.log(num)
// let num = 18
// console.log(num)

myHosting("the Hoisting above")
function myHosting(name) {
    console.log(`Test ${name}`)
}
myHosting("the Hoisting below")