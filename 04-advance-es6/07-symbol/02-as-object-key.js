let myId = Symbol('id');
let student = {
   stName: 'Jakir',
   ange: 35,
   //adding symbol as a key
   [myId]: 54003
};
console.log(student);

// skiping the symbol
for (let myKey in student){
   console.log(myKey)
}
