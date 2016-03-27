/* Longest Collatz Sequence
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/
var arr = []
var placeHolder = null
var largest = 0
var largestIndex = null
var longestCollatz = function (largestNum) {
	for (var i=2; i<largestNum; i++) {
		var count=0
		placeHolder = i
		while (placeHolder !== 1) {
			if (placeHolder % 2 === 0) {
				placeHolder = placeHolder/2
				count++
			}
			else {
				placeHolder = 3*placeHolder + 1
				count++
			}
		}
		arr.push(count)
	}
	for (var j=0; j<arr.length; j++) {
		if (arr[j] > largest) {
			largest = arr[j]
			largestIndex = j
		}
	} // 1-10, length is 2-10 is 9
	 // 999998 2-999999 true
	 // what if 3 is the largest index? so it would be in index 1
	 // 1+2 = 3
	return largestIndex+2 //  return index+2 since we start at 2
}

console.log(longestCollatz(1000000))
