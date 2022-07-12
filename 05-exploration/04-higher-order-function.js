//Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them.
//In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output.
const arrOne = [3, 2, 5 ,6];
//this is call back function
const arrTwo = arrOne.map(
   function(item){
      return item * 2;
   }
);
console.log(arrTwo);

//Pass a function as an Argument
function baseFunction(){
   return function childFunction(name){
      return 'This is the child function' + ' ' + name;
   }
}

let a = baseFunction();
let b = a('Jakir');
console.log(b);