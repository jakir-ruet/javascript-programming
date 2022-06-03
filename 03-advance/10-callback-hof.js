function mySquare(a) {
   console.log(`Area of square of ${a} is ${a * a}`)
}
//mySquare(9)

function higerOrderFunction(b, callback) {
   callback(b)
}
higerOrderFunction(10, mySquare)