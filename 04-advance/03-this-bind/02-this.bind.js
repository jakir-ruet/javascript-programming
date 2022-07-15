let person = {
   firstName: 'Jakir',
   lastName: 'Ahmed',
   fullName: function () {
      console.log(this);
      console.log('Full Name is' + ' ' + this.firstName + ' ' + this.lastName);
   }
}
person.fullName();

// let member = function () {
//    console.log(this);
//    console.log('Full Name is' + ' ' + this.firstName + ' ' + this.lastName);
// }
// let myMember = member();

let memberBind = function () {
   console.log(this);
   console.log('Full Name is' + ' ' + this.firstName + ' ' + this.lastName);
}
//let myMemberBind = member();
// const func = memberBind.bind(person);
// func();
memberBind.call(person);