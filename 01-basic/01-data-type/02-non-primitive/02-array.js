// Array
console.log("===========Array literal=========");
var myArray = [8, 3, 2, 4, 5, 7]
console.log(myArray)
console.log(myArray[0])
// pushing the new data
myArray[7] = 9
console.log(myArray)
console.log(myArray[6])
console.log(myArray.length);
console.log("=========looping in array=========");
var student = ["Fahmid", "Tahmid", "Touhida", "Jakir"]
for (let i = 0; i < student.length; i++) {
    const element = student[i];
}
console.log(student);

console.log("====By creating instance of Array directly (new keyword)====");
var myInstanceArr = new Array();
myInstanceArr[0] = "Fahmid"
myInstanceArr[1] = "Tahmid"
myInstanceArr[2] = "Touhida"
myInstanceArr[3] = "Jakir"

for (let j = 0; j < myInstanceArr.length; j++) {
    const element = myInstanceArr[j];
}
console.log(myInstanceArr);

console.log("====By creating array constructor (new keyword)====");
var myConstrutorArr = new Array("Fahmid", "Tahmid", "Touhida", "Jakir")
for (let k = 0; k < myConstrutorArr.length; k++) {
    const element = myConstrutorArr[k];
}
console.log(myConstrutorArr);