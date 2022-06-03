//for looping
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("========for looping=======")
for (let x = 0; x < num.length; x++) {
   console.log(num[x])
}

//for each
var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("========for each=======")
num1.forEach(
   function (a) {
      console.log(a)
   }
)

//for each
var num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("========for each=======")
var sq = []
num2.forEach(
   function (b) {
      sq.push(b * b)
      //console.log(b)
   }
)
console.log(`array value is ${num2}`)
console.log(`pusing the sq value ${sq}`)