function nameGenerator(firstName, lastName, Gender){
   if (Gender === 'Male') {
      let resultMale = 'Mr' + ' ' + firstName + ' ' + lastName;
      return resultMale;
   }
   else if(Gender === 'Female'){
      let resultFemale = 'Mrs' + ' ' + firstName + ' ' + lastName;
      return resultFemale;
   }
   else{
      let resultOther = 'Other' + ' ' + firstName + ' ' + lastName;
      return resultOther;
   }
}
console.log(nameGenerator('Samim', 'Hasan', 'Male'));
console.log(nameGenerator('Karima', 'Khatun', 'Female'));
console.log(nameGenerator('Rahim', 'Uddin', 'Other'));

function mixDataFunction() {
   return{
      name: 'Jakir',
      arr: ['HTML', 'CSS', 'JavaScript', 'Mongodb'],
      details: function(){
         console.log(this.name, this.arr);
      },
      skill: function(){
         console.log(this.arr);
      }
   }
}
let result = mixDataFunction();
console.log(result);
result.details();
result.skill();