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



// let person = {
//    name: 'Jakir',
//    phone: '01788888888',
//    details: function () {
//       console.log('Hello, this bind' + ' ' + this.name);
//    }
// }
// // let myName = person.name;
// // console.log(myName);

// // let myDetails = person.details;
// // myDetails();
// // console.log(myDetails);

// let myDetails2 = function () {
//    console.log(this);
//    //console.log('Hello' + ' ' + this.name);
// }
// //console.log(myDetails2);
// myDetails2();

