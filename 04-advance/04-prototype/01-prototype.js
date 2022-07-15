function Student(name, roll){
   let student = Object.create(Student.prototype);
   Student.name = name;
   Student.roll = roll;
   return student;
}
//making the prototype object
Student.prototype = {
   study(){
      console.log(`Student is studying`);
   },
   homework(){
      console.log(`Student is doing homework`);
   },
   assignment(){
      console.log(`Student is doing assignment`);
   }
};

let ahad = Student('Ahad', 39);
ahad.study();

console.log(`============== using new keyword ==============`);
function StudentNew(name, roll){
   //let this = Object.create(StudentNew.prototype); //no need for using new keyword
   StudentNew.name = name;
   StudentNew.roll = roll;
   //return StudentNew; //no need for using new keyword
}
//making the prototype object
StudentNew.prototype = {
   study(){
      console.log(`Student is studying`);
   },
   homework(){
      console.log(`Student is doing homework`);
   },
   assignment(){
      console.log(`Student is doing assignment`);
   }
};

let fahad = new StudentNew('Fahad', 39);
ahad.study();

console.log(`============== using class ==============`);
class StudentClass{
   constructor(name, roll) {
      this.name = name;
      this.roll = roll;
   }
   study(){
      console.log(`Student is studying`);
   }
   homework(){
      console.log(`Student is doing homework`);
   }
   assignment(){
      console.log(`Student is doing assignment`);
   }
}
let fahmid = new StudentClass('Fahmid', 39);
fahad.study();

//array declaration
//"let myArray = [];" & "let myArray = new Array();" is same
