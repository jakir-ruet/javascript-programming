// function man(name, age,) {
//    this.name = name;
//    this.age = age;
//    console.log(`Name ${this.name}, Age ${this.age}`);
// }
// let man1 = new man('Jakir', 30);
// let man2 = new man('John', 30);

//window binding
//"use strict";
let myWindowBinding = function () {
   //console.log(this);
   console.log(window === this);
   console.log(this.name);
}
let myObj = {
   name: 'Jakir'
}

myWindowBinding();