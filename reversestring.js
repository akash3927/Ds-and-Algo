/** @format */

// reverse string with  a naive approach
function reverseString2(inputStr) {
	var retval = new Array(inputStr.length);
	var tokens = inputStr.split('');

	for (var i = 0, j = tokens.length - 1; i <= j; i++, j--) {
		retval[i] = tokens[j];
		retval[j] = tokens[i];
	}

	return retval.join('');
}

console.log(reverseString2('Hello World')); // dlroW olleH
