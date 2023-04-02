const student = {
   roll: 54003,
   names: 'Jakir',
   class: 'Seven',
   subject: {
      subjectOne: 'English',
      subjectTwo: 'Mathematices'
   },
   // shift: {
   //    shiftOne: 'Morning Shift',
   //    shiftTwo: "Evening Shift"
   // }
};

const { roll, names, subject: { subjectOne }, shift:{shiftOne} = 'default value assign if api not response' } = student;
console.log(roll);
console.log(names);
console.log(subjectOne);
console.log(shiftOne);