// // scoping access the functions
// function outerFunction() {
//    let a = 'from outer function';
//    function innerFunction() {
//       console.log(`This is inner function`);
//       console.log(a);
//    }
//    innerFunction();

//    console.log(`This is outer function`);
// }
// outerFunction();

function baseFunction(a, b){
   function sum(){
      return a + b;
   }
   console.log('sum = ' + sum())

   function sub(){
      return a - b;
   }
   console.log('sub = ' + sub())
   
   function mul(){
      return a * b;
   }
   console.log('mul = ' + mul())
   
   function div(){
      return a / b;
   }
   console.log('div = ' + div())
}
baseFunction(10, 5)