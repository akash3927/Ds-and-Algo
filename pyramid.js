/** @format */

//For a given number of levels, print out a “pyramid” using hashes and spaces.
describe('Pyramid', () => {
	it('Should print pyramid', () => {
		assert.equal(pyramid(3), '  #  \n ### \n#####\n');
		assert.equal(_pyramid(3), '  #  \n ### \n#####\n');
	});
});
