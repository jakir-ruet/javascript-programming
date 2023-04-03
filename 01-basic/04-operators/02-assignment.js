
let a;
a = 2;
const func1 = () => a === func2(); //type and value both checking
const func2 = () => a = 3; //reassign
console.log(a);
console.log(a === 3);

console.log(func1());
console.log(a);
console.log(func2());

a += 3;
console.log(a);
a -= 3;
console.log(a);
a /= 2;
console.log(a);
a *= 2;
console.log(a);
a %= 2;
console.log(a);
a **= 2;
console.log(a);