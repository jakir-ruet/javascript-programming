
function OddEven(num) {
    if (num < 0) {
        console.log(`the is negative ${num}`)
    }
    else if(Math.trunc(num) !== num)
    {
        console.log(`the number is not integer ${num}`);
    }
    else
    {
        if(num === 0)
        {
            console.log(`the number is neither odd nor even ${num}`)
            }
            if (num % 2 !== 0 ) {
                console.log(`the number is odd ${num}`);
            }
            if(num % 2 === 0){
                console.log(`the number is even ${num}`);
        }
    }
}

//OddEven(8)

function OddEvenInterval(start, end) {
    for (let i = start; i <= end; i++) {
        OddEven(i)
    }
}
OddEvenInterval(0, 5)