console.dir(document)
console.log(document.title)
//changing the title name
document.title = "my new title name"
console.log(document.body)
console.log(typeof (document.body))

console.log("its seem to array but it not array" + " " + document.all)
console.log(document.all)
//console.log(document.all.filter())

for (let element of document.all) {
   console.log("element" + " " + element)
}

console.log(document.all[5])

console.log(document.images)
console.log(document.links)

//============DOM Traversing============