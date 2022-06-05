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

//============02-DOM Traversing >> getElementById============
console.log(document.getElementById("nameId"))

//change the name in div tag with specific id
let divElement = document.getElementById('myName')

divElement.textContent = "my name is Jakir Ahmed by textContent"
console.log(divElement.textContent)
divElement.innerText = "my name is Jahid Ahmed by innerText"
console.log(divElement.innerText)
divElement.innerHTML = "my name is Jabir Ahmed by innerHTML"
console.log(divElement.innerHTML)

//her divElement is a object not variable
divElement.style.backgroundColor = "red"
divElement.style.color = "white"
divElement.style.padding = "10px"
divElement.style.borderRadius = "5px"

//============02-DOM Traversing >> getElementByClass============
console.log(document.getElementsByClassName('item'))