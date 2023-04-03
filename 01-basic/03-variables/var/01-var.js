var b = 12; //global variable
// var a = 13;
b = 25;
if (true) {
   var a = 20; //local variable
   console.log(`in the block ${a}`);
}
console.log(`out side of block ${b}`); //this can access into the block, so this has no block scope.

