

function reverse(s) 
{
  return s.split('').reverse().join(''); // found this online
}

// console.log(reverse('banana'));

biggest = 0

for (i = 100; i <= 999; i++)
{
	for (j = 100; j <= 999; j++)
	{
		var product = (i*j);
		var stringProduct = product.toString();
		var reversedStringProduct = reverse(stringProduct);
		if (reversedStringProduct == stringProduct)
		{
			console.log (i,"x",j,"=", stringProduct);
			var intStringProduct = parseInt(stringProduct);
			if (intStringProduct > biggest)
			{
				biggest = intStringProduct;
			}
		}
	}
}
console.log("Largest Palindrome is :", biggest);

