
//with addEventListener

let counter_value = Number(document.getElementById("counter-value").innerHTML)
let plus_button = document.getElementById("plus")
let minus_button = document.getElementById("minus")

plus_button.addEventListener("click", () =>
{
    counter_value++
    document.getElementById("counter-value").innerHTML = counter_value < 10 ? `0${counter_value}`: counter_value
})

minus_button.addEventListener("click", () =>
{
    if (counter_value > 0)
    {
        counter_value--
        document.getElementById("counter-value").innerHTML = counter_value < 10 ? `0${counter_value}`: counter_value
    }
    else {
        console.warn("Cannot decrement after zero")
    }
})


