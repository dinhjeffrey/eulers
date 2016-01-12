
 //  	var i = 1;
 //  	var multiple3 = 0;
 //  	var multiple5 = 0;
	// while (i < 1000)
	// {
	//   	if ((i % 3) == 0)
	// 	{
	// 		console.log(i, ", ");
	// 		multiple3 += i;
	// 	}
	// 	else if ((i % 5) == 0)
	// 	{
	// 		console.log(i, ", ");
	// 		multiple5 += i;
	// 	}
	// 	var total = multiple3 + multiple5 
	// 	i++;
	// }
	// console.log("Total is : " + total)


	 console.log(Array.apply(null, Array(1000)).map(function (_, i) {return i+1}).filter(function(val) 
	{ return val % 3 == 0 || val % 5 == 0 }).reduce(function(a, b) { return a+b }, 0))

// console.log(Array.apply(null, Array(1000)).map(function (_, i) {return i+1}))

