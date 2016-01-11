
  	var i = 1;
  	var multiple3 = 0;
  	var multiple5 = 0;
	while (i < 1000)
	{
	  	if ((i % 3) == 0)
		{
			console.log(i, ", ");
			multiple3 += i;
		}
		else if ((i % 5) == 0)
		{
			console.log(i, ", ");
			multiple5 += i;
		}
		var total = multiple3 + multiple5 
		i++;
	}
	console.log("Total is : " + total)