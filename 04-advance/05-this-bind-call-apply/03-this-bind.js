function add(num) {
   console.log(this);
   return (this.value + num);
}

let obj = {
   value: 30
}

let myBind = add.bind(obj);
let result = myBind(20);
console.log('The summation is' + ' ' + result);

//another example
let person = {
   firstName: 'Jakir',
   lastName: 'Ahmed',
   details: function () {
      //console.log(this);

      // let { firstName, lastName } = this;
      // setTimeout(function () {
      //    console.log(this)
      //    console.log(`Full Name is ${firstName} ${lastName}`);
      // }, 3000);

      setTimeout((function () {
         console.log(`Full Name is ${this.firstName} ${this.lastName}`);
      }).bind(person), 3000);

   }
}
person.details();