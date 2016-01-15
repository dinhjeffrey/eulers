// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


function sum(n) // n = 1000
{
	for (a = 1; a < n/3; a++) // a = 1
	{
		// console.log("pass thru a | a is :", a)
		for (b = a+1; b < n/2; b++) // b = 2
		{
			// console.log("pass thru b | a is :", a, "b is :", b)
			c = n - a - b; // c = 12 - 1 - 2 = 9
			csquared = c*c;
			asquared = a*a;
			bsquared = b*b;
			// console.log("c is :", c)
			// console.log("asquared, bsquared, csquared is :", asquared, bsquared, csquared)
				
			if (asquared + bsquared == csquared) 
			{
				console.log("a, b, c is :", a, b, c)
				console.log ("product of abc is :", a*b*c)	
			}
		}
	}
}
console.log(sum(1000)); // will display undefined. idk why
