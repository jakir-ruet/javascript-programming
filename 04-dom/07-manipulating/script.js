let input = document.createElement("input")
let button = document.createElement("button")
let divT = document.getElementsByTagName("div")[0]

input.setAttribute("type", "text")
input.setAttribute("placeholder", "Enter your name")
button.innerHTML = "Submit"

input.required = true

button.addEventListener("click", () => {

   let h1 = document.createElement("h1")
   h1.innerHTML = input.value

   divT.appendChild(h1)
})

divT.appendChild(input)
divT.appendChild(button)