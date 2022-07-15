function mySpread(a, b, c, d, e) {
      return a + b + c + d + e
}
let num = [1, 2, 3, 4, 5]
let sum = num[0] + num[1] + num[2] + num[3] + num[4]
console.log(`using the index of array = ${sum}`)
//using the spread operator
console.log(`using spread operator = ${mySpread(...num)}`)