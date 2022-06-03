class myStudent {
   constructor(id, name) {
      this.id = id
      this.name = name
   }
   set mySet(mySetName) {
      this.mySetName = mySetName
   }
   get myGet() {
      return this.id + " " + this.name
   }
}
let st = new myStudent(101, "Jakir")
console.log(st.id)
console.log(st.name)
console.log(st)

console.log("=========setter=========")
st.mySet = "my setter"
console.log(st.mySetName)

console.log("========getter==========")
console.log(st.myGet)