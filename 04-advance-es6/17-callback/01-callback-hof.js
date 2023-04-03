function mySquare(a) {
   console.log(`Area of square of ${a} is ${a * a}`)
}
//mySquare(9)

function higherOrderFunction(b, callback) {
   callback(b)
}
higherOrderFunction(10, mySquare)