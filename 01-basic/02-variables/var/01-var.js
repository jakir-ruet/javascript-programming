var a = 12; //global variable
if (true) {
   var a = 10; //local variable
   console.log(a);
}
console.log(a); //this can access into the block, so this has no block scope.

