// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function isPrime(n)
{
	if(n < 2) return false;
	else if (n == 2) return true;
	else if (n % 2 === 0) return false;
	else if (n < 9) return true;
	else if (n % 3 === 0) return false;
	max = (Math.sqrt(n+0.0)) + 1;
	for (i = 5; i <= max; i +=6)
	{
		if (n % i === 0) return false;
		if (n % (i + 2) === 0) return false;
	}
	return true;
}

// #2 is 1st prime

prime = 0;
j = 2; // don't use i, it will mess things up. use j instead.

while (prime < 10001) 
{
	if (isPrime(j) === false)
	{
		poop = "poop";
	} else {
		prime += 1; 
	}
	j += 1;
}

console.log("The #", prime, "prime is : ", j-1);
