/** @format */

function oddball_sum(nums) {
	// final count of all odd numbers added up
	var final_count = 0;

	// loop through entire list
	for (var i = 0; i < nums.length; i++) {
		// we divide by 2, and if there is a remainder then
		// the number must be odd so we add it to final_count
		if (nums[i] % 2 === 1) {
			final_count += nums[i];
		}
	}

	return final_count;
}

oddball_sum([1, 2, 3, 4, 5]);
