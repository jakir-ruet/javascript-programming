// 1-=======Assign a function in a variable=======
const myFirstFunction = function(myName){
   //console.log(`Hello, Assign a function in a variable by ${myName}`);
   return myName;
}
//myFirstFunction('Jakir');
let result = myFirstFunction('Jakir');
console.log(`Hello, Assign a function in a variable by ${result}`);

// 2-=======Assign a function in a array=======
let myArray = [4, 3, 5, 7, 2, 9];
//inserting the function in the array
myArray.push(myFirstFunction);
console.log(myArray);

// 3-=======Assign a function in an object/property=======
// 4-=======Function create as we need=======
// 5-=======Pass a function as an Argument=======
// 6-=======Return a function in a function=======