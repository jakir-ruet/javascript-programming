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

// 3-=======Assign a function as an object/property=======
let myObject = {
   name: 'Jakir',
   designation: 'CEO',
   address: myFirstFunction('This from another function'),
   details: function(){
      console.log(`Hi, function in object`);
   }
};
console.log(myObject);

// 4-=======Function create as we need=======
let funcResult = 20 + function(){return 30}();
console.log(`Function inline ${funcResult}`);

function sumFunction(a, b) {
   let sum = a + b;
   return sum;
}
let sumResult = sumFunction(4, 5);
console.log(`The sum result ${sumResult}`);

// 5-=======Pass a function as an Argument=======
function myNewFunction(name, myOldFunction) {
   return myOldFunction(name);
}
let newFunction = myNewFunction('jakir new', myFirstFunction);
console.log(`function as an argument ${newFunction}`);

// 6-=======Return a function in a function=======
function baseFunction(base) {
   return function childFunction(child){
      let childResult = 1;
      for (let i = 0; i < base; i++) {
         childResult *=  child;
      }
      return childResult;
   }
}
let sqtResult = baseFunction(3);
let finalResult = sqtResult(3);
console.log(finalResult);