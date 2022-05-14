function PrimeNonprime(num)
{
    if (num < 0) 
    {
        console.log(`the number is negative ${num}`);
    }
    else if(Math.trunc(num) !== num)
    {
        console.log(`the number is decimal ${num}`);
    }
    else
    {
        if (num === 0 || num === 1 ) 
        {
            console.log(`the number neither prime nor composite ${num}`);
        }
        else
        {
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    console.log(`this composite ${num}`);
                }
                else{
                    console.log(`prime ${num}`);
                }
            }
        }
    }
}

PrimeNonprime(9)