// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// answer is 6857

// i = 1 // supposed to use 2
// while (i <= 600851475143) // make 600851475143 a variable
// {
// 	if ((600851475143 % i) == 0) // make 600851475143 a variable
// 	{
// 		j = (600851475143 / i); // j /= i

// 		if (i > j) //no
// 		{
// 			break; // no
// 		}

// 		console.log(i,"x",j); 
// 	} else {
// 	i++;
//	}
// }

// very close

function largestPrimeFactor(n)
{
var i=2;
	while (i <= n) // 2 < = 600851475143
	{
	    if (n % i == 0) // 600851475143 / 2 == 0
	    {
	        n /= i; // n = 600851475143 / 2 (not 2 but any number that divides wholely into n, first is 600851475143)   
	    } else { // doesn't increase if i wholely divides into n
	        i++;
	    }
	    console.log("i is", i, ': n is', n);
	}
	console.log('final answer :', i);
}
var a = 600851475143; 
largestPrimeFactor(a)

// works because i goes through lower primes first, if it didnt divide by lower primes, it only can divide by higher primes




