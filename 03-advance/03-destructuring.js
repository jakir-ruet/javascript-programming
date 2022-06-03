// Array destructuring
let myArray = ["Jakir", "Ahmed"]
let [firstName, lastName] = myArray //destructure here
console.log("========Array destructuring========")
console.log(`Full name is ${firstName} ${lastName}`)

//object destructuring
let myRectangle = {
   height: 100,
   width: 50
}
// destructure here
let { height, width } = myRectangle
let area = height * width
console.log("========object destructuring========")
console.log(`The area is ${area}`)

// nested destructuring
let myHome = {
   size1: {
      height1: 300,
      width1: 250
   },
   size2: {
      height2: 250,
      width2: 200
   },
   room: ["Reading Room", "Guest Room"],
   extra: true
}
//destructure here
let {
   size1: { height1, width1 },
   size2: { height2, width2 },
   room: [room1, room2]
} = myHome
let area1 = height1 * width1
let area2 = height2 * width2
console.log("==========nested destructure=============")
console.log(`The ${room1} area is ${area1}`)
console.log(`The ${room2} area is ${area2}`)
