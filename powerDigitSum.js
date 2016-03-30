/* Power Digit Sum
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

function exponent(base, power) { // 2^3 = 2*2*2 = 8
	for (var i=1, acc=base; i<power; i++){ // 2*2 = 4
		acc*=base
	}

	/***** fix scientific notation
	*/

	for (var j=0, sum=0; j<accArr.length; j++) {
		sum+=acc[j]
	}
}

exponent(2, 1000)