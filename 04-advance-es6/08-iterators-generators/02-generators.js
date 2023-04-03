//generators provide a new way to work with functions and iterators.
// Using a generator,
// 1. you can stop the execution of a function from anywhere inside the function
// 2. and continue executing code from a halted position
function* myGenFunction() {
   console.log('code before first yield');
   yield 150;
   console.log('code before second yield');
   yield 200;
   console.log('code before third yield');
   yield 250;
}
const myGenerator = myGenFunction();
console.log(myGenerator);
console.log('---------------------')
console.log(myGenerator.next());
console.log('---------------------')
console.log(myGenerator.next());