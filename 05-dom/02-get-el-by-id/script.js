console.log("Get element by id")
console.log(document.getElementById("nameId"))

//change the name in div tag with specific id
let divElement = document.getElementById('myName')

divElement.textContent = "my name is Jakir Ahmed by textContent"
console.log(divElement.textContent)
divElement.innerText = "my name is Jahid Ahmed by innerText"
console.log(divElement.innerText)
divElement.innerHTML = "my name is Jabir Ahmed by innerHTML"
console.log(divElement.innerHTML)

//here divElement is a object not variable
divElement.style.backgroundColor = "red"
divElement.style.color = "white"
divElement.style.padding = "10px"
divElement.style.borderRadius = "5px"
