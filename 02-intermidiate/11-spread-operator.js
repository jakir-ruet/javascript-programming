function mySpread(a, b, c, d, e) {
      return a + b + c + d + e
}
let nums = [1, 2, 3, 4, 5]
let sum = nums[0] + nums[1] + nums[2] + nums[3] + nums[4]
console.log(`using the index of array = ${sum}`)
//using the spread operator
console.log(`using spread operator = ${mySpread(...nums)}`)