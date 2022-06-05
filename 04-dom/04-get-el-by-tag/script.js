console.log("Get element by tag")
console.log(document.getElementsByTagName('li'))
let liElement = document.getElementsByTagName('li')
liElement.textContent = "this is li tag"

console.log("query selector")
let header = document.querySelector(".item")
console.log(header)

