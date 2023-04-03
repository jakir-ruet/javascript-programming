//class constructor

// class Person {
//    name = 'Tahmid'
//    age = 9
//    email = 'tm.ahad.07@gmail.com'
//    constructor(n, a, e) {
//       this.name = n;
//       this.age = a;
//       this.email = e;
//    }
// }
// const obj1 = new Person('Fahmid', 5, 'fm@gmail.com');
// console.table(obj1);

//function constructor
// /** @class **/
// function Person(n, a, e) {
//    this.name = n;
//    this.age = a;
//    this.email = e;
// }
// let obj2 = new Person('Tahmid', 9, 'fm@gmail.com')
// console.table(obj2);

//another way to defining the class

class User {
   name
   age
   email
   static hello() {
      console.log('hello, world!');
   }
   constructor(n, a, e) {
      this.name = n;
      this.age = a;
      this.email = e;
   }
   details() {
      console.table(this);
   }
}
let user1 = new User('Fahmid', 5, 'fm@gmail.com');
User.hello();
user1.details();
user1.details();