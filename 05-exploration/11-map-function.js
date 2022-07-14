let arr = [4, 5, 6, 9, 6, 7, 3, 2];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
   newArr.push(arr[i] * 2);
}
console.log(newArr);

//using map function
let newMapArr = arr.map(function (value) {
   return value * 2;
});
console.log(newMapArr);

//using callback function
function myOwnMapArr(arr, callback) {
   let newOwnMap = [];
   for (let i = 0; i < arr.length; i++) {
      let data = callback(arr[i]);
      newOwnMap.push((data));
   }
   return newOwnMap;
};

let assignCallback = myOwnMapArr(arr, function (value) {
   return value + 2;
});
console.log(assignCallback);