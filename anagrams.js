/** @format */

describe('Anagrams', () => {
	it('Should implement anagrams', () => {
		assert.equal(anagrams('hello world', 'world hello'), true);
		assert.equal(anagrams('hellow world', 'hello there'), false);
		assert.equal(anagrams('hellow world', 'hello there!'), false);
	});
});
