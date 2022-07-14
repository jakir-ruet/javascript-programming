var myObject = [
      {
            id: 54001,
            name: "Fahmid",
            designation: "CTO",
            point: 3.65
      },
      {
            id: 54002,
            name: "Tahmid",
            designation: "Software Engineer",
            point: 2.98
      },
      {
            id: 54003,
            name: "Touhida",
            designation: "Chainman",
            point: 2.65
      },
      {
            id: 54004,
            name: "Jakir",
            designation: "Managing Director",
            point: 3.00
      }
]
console.log(myObject)
console.table(myObject)
//using filter & map in function
function myFunction() {
      return myObject.filter(
            function (x) {
                  return x.point > 3
            }
      ).map(function (y) {
            return y.name
      });
}
console.log("result from function" + " " + myFunction())
console.log("=============function============")
//using the arrow function
// const myArrowFunction = () => {
//       return myObject.filter((x) => x.point > 3).map((y) => y.name)
// }
// console.log(myArrowFunction())

const myArrowFunction = () => myObject.filter((x) => x.point > 3).map((y) => y.name)
console.log(myArrowFunction())