// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// var magicnumber = 1;
// var multAllTogether = 1;
// for (i = 1; i <= 10; i++)
// {
// 	multAllTogether *=  i;
// }
// console.log("totalProduct :", multAllTogether); // 2432902008176640000 for 20. 
// 												// 3628800 for 10.


// for (j = 1; j <= multAllTogether; j++)
// {
// 	for (k = 1; k <= 10; k++) 
// 	{
// 		if ((j % k) == 0)
// 		{

// 		}
// 	}
// } didn't work. 

//this is much easier

var i = 20;
 
while (i %  2 != 0 || i %  3 != 0 || i %  4 != 0 || i %  5 != 0 ||
         i %  6 != 0 || i %  7 != 0 || i %  8 != 0 || i %  9 != 0 ||
         i % 10 != 0 || i % 11 != 0 || i % 12 != 0 || i % 13 != 0 ||
         i % 14 != 0 || i % 15 != 0 || i % 16 != 0 || i % 17 != 0 ||
         i % 18 != 0 || i % 19 != 0 || i % 20 != 0) 
{
    i += 20;
}

console.log("smallest multiple is :", i);