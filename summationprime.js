// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


function isPrime(n)
{
	if(n < 2) return false;
	else if (n == 2) return true;
	else if(n % 2 == 0) return false;
	else if (n < 9) return true;
	else if (n % 3 == 0) return false;
	max = (Math.sqrt(n+0.0)) + 1;
	for (i = 5; i <= max; i +=6)
	{
		if (n % i == 0) return false;
		if (n % (i + 2) == 0) return false;
	}
	return true;
}

// #2 is 1st prime

// j = 2; // don't use i, it will mess things up. use j instead.
sum = 0

for (j = 2; j < 2000000; j++)
{
	if (isPrime(j) == true)
	{
		sum += j;
	}
}

console.log("The summation of prime up to 2M is :", sum);
