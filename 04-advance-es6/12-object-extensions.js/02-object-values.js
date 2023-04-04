const students = {
   stName: 'Jakir',
   age: 35,
   scName: 'MHA High School'
};

const stDetails = Object.values(students);
console.log(stDetails);

for (const student in students){
   if (students.hasOwnProperty(student)) {
      const value = students[student];
      console.log(value)
   }
}