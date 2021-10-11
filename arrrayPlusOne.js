/** @format */

//a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
// ES5 method is nice and clean
exports.es5 = function (array) {
	return array.reduce(function (memo, num) {
		return memo + num;
	}, array.length);
};

// Without array.reduce method isn't much different
exports.iterative = function (array) {
	var result = array.length;

	for (var i = 0; i < array.length; i++) {
		result += array[i];
	}

	return result;
};
