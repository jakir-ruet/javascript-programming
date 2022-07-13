function parentFunction() {
   console.log('Talking from the parent function');
   return function childFunction() {
      console.log('Talking from the child function');
   }
}
let result = parentFunction();
result();