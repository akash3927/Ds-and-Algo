/** @format */

function OverlappingRanges(arr) {
	// keep a count of how many numbers overlap
	var counter = 0;

	// loop through one of the ranges
	for (var i = arr[0]; i < arr[1]; i++) {
		// check if a number within the first range exists
		// in the second range
		if (i >= arr[2] && i <= arr[3]) {
			counter += 1;
		}
	}

	// check if the numbers that overlap is equal to or greater
	// than the last number in the array
	return counter >= arr[4] ? true : false;
}

OverlappingRanges([4, 10, 2, 6, 3]);
