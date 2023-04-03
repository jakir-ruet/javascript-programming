
function primeNumberInterval(start, end) {
    for (let i = start; i < end; i++) {
    
        let isPrime = true
        if (i === 0 || i === 1)
            {
                console.log(`0 & 1 is neither prime nor composite`)
                continue
            }
        else if(i < 0)
            {
                console.log(`${i} this is negative number`);
            }
        else if(Math.trunc(i) !== i)
            {
                console.log(`${i} this fractional number`);
            }
        else if(i > 1)
            {
                for (let j = 2; j < i; j++)
                {
                    if( i % j === 0 )
                    {
                        isPrime = false
                        break
                    }
                }
            }
        if (isPrime)
            {
                console.log(`${i} is the prime number`);    
            }
        else
            {
                console.log(`${i} it is not prime number`);
            }
    }
}
primeNumberInterval(1, 15)
