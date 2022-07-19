console.log("welcome to Bangladesh")
const taskOne = () => {
   return new Promise((resolve, reject) => {
      resolve("Task one is completed")
   })
}
const taskTwo = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("Task two is completed")
      }, 1500)
   })
}
const taskThree = () => {
   return new Promise((resolve, reject) => {
      resolve("Task three is completed")
   })
}
const taskFour = () => {
   return new Promise((resolve, reject) => {
      resolve("Task four is completed")
   })
}
async function callAllTasks() {
   const tsOne = await taskOne()
   console.log(tsOne)
   const tsTwo = await taskTwo()
   console.log(tsTwo)
   const tsThree = await taskThree()
   console.log(tsThree)
   const tsFour = await taskFour()
   console.log(tsFour)
}
callAllTasks()

// const callAllTasksAsync = async () => {
//    const tsOne = await taskOne()
//    console.log(tsOne)
//    const tsTwo = await taskTwo()
//    console.log(tsTwo)
//    const tsThree = await taskThree()
//    console.log(tsThree)
//    const tsFour = await taskFour()
//    console.log(tsFour)
// }
// callAllTasksAsync()