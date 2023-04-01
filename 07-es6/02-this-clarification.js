// this clarification
// // give the out undefined here
// let js = {
//    name: 'JavaScript',
//    libFrm: ['ReactJS', 'AngularJS', 'VueJS'],
//    printlibFrm: function () {
//       this.libFrm.forEach(function (a) {
//          console.log(`I love ${a} in ${this.name}`)
//       })
//    }
// };
// js.printlibFrm();

// // calling the outer this here, working good
// let js = {
//    name: 'JavaScript',
//    libFrm: ['ReactJS', 'AngularJS', 'VueJS'],
//    printlibFrm: function () {
//       let self = this; // calling outer this here
//       this.libFrm.forEach(function (a) {
//          console.log(`I love ${a} of ${self.name}`)
//       })
//    }
// };
// js.printlibFrm();

// using the arrow function
let js = {
   name: 'JavaScript',
   libFrm: ['ReactJS', 'AngularJS', 'VueJS'],
   printlibFrm: function () {
      this.libFrm.forEach((a) => console.log(`I love ${a} of ${this.name}`))
   }
};
js.printlibFrm();