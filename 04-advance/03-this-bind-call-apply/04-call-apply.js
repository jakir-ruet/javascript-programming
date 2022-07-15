let person = function (a, b, c) {
   console.log(`Name ${this.name}, Age ${this.age}, ${a} ${b} ${c}`);
}
let info = {
   name: 'John',
   age: 30
}
//for parameter passing through function
let a = 'Good at Math';
let b = 'Good at Physics';
let c = 'Good at Chemistry';

person.call(info, a, b, c);

console.log('==============apply================')
let personApply = function (arr) {
   console.log(`Name ${this.name}, Age ${this.age}, ${x} ${y} ${z}`);
}
let infoApply = {
   name: 'John',
   age: 30
}
//for parameter passing through function
let x = 'Good at Math';
let y = 'Good at Physics';
let z = 'Good at Chemistry';
let arr = [x, y, z]
person.apply(infoApply, arr);