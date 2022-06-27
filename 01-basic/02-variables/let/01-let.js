let a = 12; //global variable
if (true) {
   let a = 10; //local variable
   console.log(a);
}
console.log(a); //this can not access into the block, so this has block scope.