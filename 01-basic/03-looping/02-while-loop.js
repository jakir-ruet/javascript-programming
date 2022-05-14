// var i = 0
// while (i < 5) {
//     console.log("while loop");
//     i++
// }

var isNumber = true
while (isNumber) {
    var randNumber = Math.floor(Math.random() * 100 + 1)
    if (randNumber === 10) {
        console.log("you have winner")
        isNumber = false
    }
    else
    {
        console.log("You have got" + " " + randNumber)
    }
}