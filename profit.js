/** @format */

describe('Max Profit', () => {
	it('Should return minimum buy price and maximum sell price', () => {
		assert.deepEqual(maxProfit([1, 2, 3, 4, 5]), [1, 5]);
		assert.deepEqual(maxProfit([2, 1, 5, 3, 4]), [1, 5]);
		assert.deepEqual(maxProfit([2, 10, 1, 3]), [2, 10]);
		assert.deepEqual(maxProfit([2, 1, 2, 11]), [1, 11]);
	});
});
