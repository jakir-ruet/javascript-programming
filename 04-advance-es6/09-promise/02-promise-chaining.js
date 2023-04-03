console.log("welcome to Bangladesh")
const taskOne = () => {
   return new Promise((resolve, reject) => {
      resolve("Task one completed")
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

taskOne()
   .then((res) => console.log(res))
   .then(taskTwo)
   .then((res) => console.log(res))
   .then(taskThree)
   .then((res) => console.log(res))
   .then(taskFour)
   .then((res) => console.log(res))
   .catch((err) => console.log(err))
console.log("Bye")