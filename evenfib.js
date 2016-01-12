// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

a = 1;
b = 2;
c = a + b; // 3
eventotal = 2
console.log(a);
console.log(b);
while (c <= 4000000)
{
	console.log(c);
	a = b; // a = 2
	b = c; // b = 3
	c = a + b; // c = 5
	if ((c % 2) == 0)
	{
		eventotal += c;
	}
} 
console.log(eventotal);
