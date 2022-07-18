let val1 = Symbol('this is symbol one');
let val2 = Symbol('this is symbol one');
console.log(val1 === val2);

//typing checking
console.log(typeof(val1));

let id = Symbol('100');
let person = {
   name: 'John',
   //adding symbol as a key
   [id]: 100, //not 'id': 100;
   age: 30
}

//Symbols are not included in for...in Loop
//using for in
for(let key in person){
   console.log(key);
   //console.log(key, person);
}