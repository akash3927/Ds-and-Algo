/** @format */

describe('Steps', () => {
	it('Should print steps', () => {
		assert.equal(steps(3), '#  \n## \n###\n');
		assert.equal(_steps(3), '#  \n## \n###\n');
	});
});
