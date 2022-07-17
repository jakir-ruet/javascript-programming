//filter
let arr = [5, 6, 7, 8, 9, 10, 11, 12, 13];
let even = arr.filter(item => item % 2 === 0);
let sortEven = even.sort();
console.log(`even using filter is ${even}`);

//filter another way
let students = [
   {
      name: 'John',
      gpa: 4.50
   },
   {
      name: 'Karim',
      gpa: 3.50
   }
];
console.log(students.filter(item => item.gpa >= 3.00));

//using if condition
let oddArr = [];
let evenArr = [];
for (let i = 0; i < arr.length; i++) {
   if(arr[i] % 2 === 0){
      evenArr.push(arr[i]);
   }
   else{
      oddArr.push(arr[i]);
   }
}
console.table(oddArr);
console.table(evenArr)

//filter using the function
let bigNumber = students.filter(function(e){
   return e.gpa >= 3.50;
});
console.log('using function');
console.log(bigNumber);

//using callback function
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

console.log('=============odd even filter is' + ' ' + myCb);

//using arrow function
let bigNumbers = students.filter(item => item.gpa >= 3.50);
console.log('using arrow function');
console.log(bigNumbers);