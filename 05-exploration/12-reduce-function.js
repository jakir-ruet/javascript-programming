let arr = [4, 5, 6, 9, 6, 7, 3, 2];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
}
console.log('The summation = ' + sum);

//using the reduce function
let myReduce = arr.reduce(function (a, b) {
   return (a + b);
});
console.log('The result = ' + myReduce)