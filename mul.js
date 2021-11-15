/** @format */

// Write a "mul" function which will properly when invoked as below syntax

// Problem;
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
// Answer;
function mul(x) {
	return function (y) {
		// anonymous function
		return function (z) {
			// anonymous function
			return x * y * z;
		};
	};
}
