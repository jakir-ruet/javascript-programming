const strArr = [8, 4, 2, 1, 9, 3];

const ascArr = strArr.sort();
console.log(ascArr);

const descArr = strArr.sort().reverse();
console.log(descArr);

//another example
let employees = [
   {name: 'Fahmid', salary: 70000, designation: 'Software Developer'},
   {name: 'Ahad', salary: 90000, designation: 'Sr. Software Developer'},
   {name: 'Samim', salary: 100000, designation: 'Architect'},
   {name: 'Jakir', salary: 150000, designation: 'CEO'},
];
// employees.sort(function(a, b){
//    return a.salary - b.salary;
// });
// console.table(employees);

employees.sort(function(x, y){
   for (let el of employees)
   console.log(`Salary => `, el.salary)
   return function(m, n){

   }
});
