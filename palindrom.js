/** @format */

describe('Palindrome', () => {
	it('Should return true', () => {
		assert.equal(
			isPalindrome('Cigar? Toss it in a can. It is so tragic'),
			true,
		);
	});
	it('Should return false', () => {
		assert.equal(isPalindrome('sit ad est love'), false);
	});
});
