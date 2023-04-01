let myNum = [4, 5, 3, 6, 7, 8, 2];
let result = myNum.find(function (a) {
   return (a > 7)
});
console.log(`result ${result}`);
console.log('===============================')

let students = [
   {
      name: 'Jakir',
      roll: 54003
   },
   {
      name: 'Jasim',
      roll: 54004
   },
   {
      name: 'Kabir',
      roll: 54005
   }
];
console.log(students.find((c) => {
   return (
      c.roll > 54003
   )
}));
console.log('===============================')
let objResult = students.find(function (d) {
   return(d.roll < 54004)
})

console.log(objResult);