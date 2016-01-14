// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


total = 0;
for (i = 1; i <= 100; i++)
{
	squared = (i*i);
	total += squared;
}
console.log("sum of squares is :", total);

total2 = 0;
sum = 0;
for (j = 1; j <= 100; j++)
{
	sum += j;
}
total2 = (sum * sum);
console.log("square of sum is :", total2);

finalTotal = (total2 - total);
console.log("difference is :", finalTotal);
