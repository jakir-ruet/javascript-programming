let arr = [4, 5, 6, 9, 6, 7, 3, 2];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
   }
}
console.log('finding even number' + ' ' + newArr);


let myNewArray = arr.filter(function (a) {
   return a % 2 == 1;
});

console.log('finding odd number' + ' ' + myNewArray);

//another ways
function mySelection(arr, callback) {
   let myNewSelection = [];
   for (i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
         myNewSelection.push(arr[i]);
      }
   }
   return myNewSelection;
};

let myCb = mySelection(arr, function (element) {
   return element % 2 == 1;
});

console.log('odd even filter is' + ' ' + myCb);