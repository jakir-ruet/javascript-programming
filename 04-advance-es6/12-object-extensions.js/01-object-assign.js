let myColor = {
   color: 'red'
};
console.log(myColor);
// clone the object here
let cloneMyColor = Object.assign({}, myColor);
console.log(cloneMyColor);

const student = {
   stName: 'Jakir',
   age: 35,
   clName: 'Five'
};

const school = {
   scName: 'MHA High School'
};

let objMerge = Object.assign(student, school);
console.log(objMerge);