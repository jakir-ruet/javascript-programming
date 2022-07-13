//Closure means that an inner function always has access to the var/let and parameters of its outer function,
//even after the outer function has returned.
function outerFunction(){
   let outerVar = 'this is the closer example';
   function innerFunction(){
      console.log(outerVar);
   }
   return innerFunction;
}
let innerFunc = outerFunction();
innerFunc();
//when you call innerFunc(), it can still access outerVar which is declare in outerFunction(). This concept called closure.

//closure with another example
function introduce(msg){
   return function(name){
      console.log(msg + ' ' + name);
   }
}
let result = introduce('Nice to meet you,');
result('Sun IT Limited');
