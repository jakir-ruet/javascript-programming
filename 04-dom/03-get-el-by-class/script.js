
//============02-DOM Traversing >> getElementsByClass============
console.log("Get element by class")
console.log(document.getElementsByClassName('item'))
let items = document.getElementsByClassName('item')
for (let i = 0; i < items.length; i++) {
   items[i].style.color = 'red'
}


