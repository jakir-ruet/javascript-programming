//static

function helloStatic(){
   return 'hello!';
};
//dynamic
let str = 'hello!';

function helloDynamic(){
   return str;
};
//nested function
function nestedHello(){
   return function (){
      return function () {
         return 'hello';
      };
   };
};
//'hello' = 0X2
//[[[0X2]]] => [[0X2]] => [0X2] => 0X2
nestedHello()()();

//store
//[[[0X2]]]
let func = nestedHello;
// [[[0X2]]]
func()()();
let result = nestedHello()()();
//[[[0X2]]] => [[0X2]] => [0X2] => 0X2
// nestedHello = {
//    prototype,
//    call: () => ...
// }
//nestedHello()
function count(){
   return function(){
      let i = 0;
      i++;
      return i;
   };
}
const count1 = count()
// {
//    i: 2,
//    call: () => i++; i = 2
// }
// {
//    call: () => {i = 0; i++; i}
// }
console.log(count1());
console.log(count1());
console.log(count1());