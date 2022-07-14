const myPromise = new Promise((resolve, reject) => {
   let completedPromise = true
   if (completedPromise) {
      resolve("promise completed")
   }
   else {
      reject("promise not completed")
   }
})

console.log(myPromise)
myPromise
   .then((res) => {
      console.log(res)
   })
   .catch((err) => {
      console.log(err.message)
   })
console.log("end")
