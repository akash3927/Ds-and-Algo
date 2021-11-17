/** @format */

//Program to check if the last digits of three given positive integer is same

function checkLast(x, y, z) {
	if (x > 0 && y > 0 && z > 0) {
		return x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10;
	} else {
		return false;
	}
}
checkLast(100, 50, 60);
