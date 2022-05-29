let start = performance.now()
const myGetterFunction = {
    firstName: "Jakir",
    lastName: "Ahmed",
    language: "bn",
    langFuntion: function () {
        return this.firstName+ " " + this.lastName
    }
}
let end = performance.now()

console.log(myGetterFunction.langFuntion())
console.log(`${end - start}ms`)

let start1 = performance.now()
const myGetter = {
    firstName: "Jakir",
    lastName: "Ahmed",
    language: "bn",
    get lang(){
        return this.firstName + " " + this.lastName
    }
}
let end1 = performance.now()

console.log(myGetter.lang)
console.log(`${end1 - start1}ms`)

let start2 = performance.now()
const mySetterFunction = {
    firstName: "Jakir",
    lastName: "Ahmed",
    language: "",
    langFuntion: function (lg = "") {
        this.language = lg
        console.log("lang updated")
    }
}
let end2 = performance.now()

mySetterFunction.langFuntion("Bangla")
console.log(mySetterFunction.language)
console.log(`${end2 - start2}ms`)

console.log("=======================")

let start3 = performance.now()
const mySetter = {
    firstName: "Jakir",
    lastName: "Ahmed",
    lang: "",
    set language(lg){
        this.lang = lg
        console.log("language updated")
    }
}
let end3 = performance.now()
mySetter.language = "Bangla"
console.log(mySetter.lang)
console.log(`${end3 - start3}ms`)