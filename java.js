/** @format */

//Program to check if a string starts with ‘Java’ return true else false.

function startWith(str) {
	if (str.length < 4) {
		return false;
	}
	front = str.substring(0, 4);
	if (front == 'Java') {
		return true;
	} else {
		return false;
	}
}
startWith('JavaScript');
