/** @format */

//Program to Replace One Character With Another
function replaceChar(str, a, b) {
	var newstr = [];

	for (var i = 0; i < str.length; i++) {
		if (str[i] == a) {
			newstr.push(b);
		} else {
			newstr.push(str[i]);
		}
	}
	console.log(newstr.join(''));
}
replaceChar('Hi sikandar kumar', 'r', '.');
